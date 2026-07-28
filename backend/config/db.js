import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Options are no longer needed in Mongoose 6+ but good practice if using older
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Do not exit process if DB fails, allow offline AI functionality if needed
    // process.exit(1);
  }
};

export default connectDB;
