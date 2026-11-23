import { UserModel } from '../model/user_model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { generateToken } from '../utils/generateToken.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, 'Email and password are required');
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const token = generateToken(user._id, user.role);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    };

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    return res
      .status(200)
      .cookie('token', token, cookieOptions)
      .json(new ApiResponse(200, { user: userResponse, token }, 'Logged in successfully'));
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    });
    return res.status(200).json(new ApiResponse(200, null, 'Logged out successfully'));
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    return res.status(200).json(new ApiResponse(200, req.user, 'Current user retrieved'));
  } catch (error) {
    next(error);
  }
};

export const seedAdmin = async (req, res, next) => {
  try {
    const count = await UserModel.countDocuments();
    if (count > 0) {
      return res.status(400).json(new ApiResponse(400, null, 'Admin already exists'));
    }

    const admin = await UserModel.create({
      name: 'System Admin',
      email: 'admin@annisoftware.com',
      password: 'AdminPassword123!',
      role: 'admin'
    });

    return res.status(201).json(new ApiResponse(201, { email: admin.email }, 'Default admin created'));
  } catch (error) {
    next(error);
  }
};
