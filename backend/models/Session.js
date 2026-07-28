import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  ip: { type: String },
  browser: { type: String },
  device: { type: String },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Session = mongoose.model('Session', sessionSchema);
export default Session;
