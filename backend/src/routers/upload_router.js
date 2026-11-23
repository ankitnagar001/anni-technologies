import { Router } from 'express';
import { upload } from '../middleware/upload_middleware.js';
import { verifyJWT } from '../middleware/auth_middleware.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import cloudinary from '../config/cloudinary.js';

const router = Router();

router.post('/', verifyJWT, upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ApiError(400, 'No file uploaded');
    }

    // If Cloudinary credentials are configured
    if (process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_KEY !== '123456789') {
      const b64 = Buffer.from(req.file.buffer).toString('base64');
      const dataURI = `data:${req.file.mimetype};base64,${b64}`;
      const uploadRes = await cloudinary.uploader.upload(dataURI, {
        folder: 'anni_software',
        resource_type: 'auto'
      });
      return res.status(200).json(new ApiResponse(200, { url: uploadRes.secure_url }, 'File uploaded successfully'));
    }

    // Fallback: Data URI for local / demo
    const base64Url = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    return res.status(200).json(new ApiResponse(200, { url: base64Url }, 'File uploaded (local data URI)'));
  } catch (error) {
    next(error);
  }
});

export default router;
