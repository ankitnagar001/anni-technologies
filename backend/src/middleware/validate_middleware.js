import { ApiError } from '../utils/apiError.js';

export const validateBody = (schemaFn) => {
  return (req, res, next) => {
    try {
      const error = schemaFn(req.body);
      if (error) {
        return next(new ApiError(400, error));
      }
      next();
    } catch (err) {
      next(new ApiError(400, err.message));
    }
  };
};
