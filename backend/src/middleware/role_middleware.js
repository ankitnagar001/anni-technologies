import { ApiError } from '../utils/apiError.js';

export const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, 'Authentication required'));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, 'Forbidden: Insufficient privileges'));
    }

    next();
  };
};
