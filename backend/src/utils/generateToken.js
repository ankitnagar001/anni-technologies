import jwt from 'jsonwebtoken';

export const generateToken = (userId, role = 'admin') => {
  return jwt.sign(
    { id: userId, role },
    process.env.JWT_SECRET || 'anni_software_jwt_super_secret_key_2026_dev',
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};
