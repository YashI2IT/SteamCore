import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set('bufferCommands', false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 100, // Fail instantly (100ms) to prevent Vercel 10s timeout
      bufferCommands: false, 
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Do not exit process if DB fails, allow offline AI functionality if needed
    // process.exit(1);
  }
};

export default connectDB;
