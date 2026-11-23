import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/anni_software');
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] ${error.message}`);
    // In dev mode or without local mongo, log error rather than hard exiting
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};
