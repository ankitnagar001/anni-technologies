import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError.js';
import { UserModel } from '../model/user_model.js';

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new ApiError(401, 'Unauthorized request: No token provided');
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET || 'anni_software_jwt_super_secret_key_2026_dev'
    );

    const user = await UserModel.findById(decodedToken?.id).select('-password');
    if (!user) {
      throw new ApiError(401, 'Invalid access token: User does not exist');
    }

    req.user = user;
    next();
  } catch (error) {
    next(new ApiError(401, error?.message || 'Invalid or expired access token'));
  }
};
