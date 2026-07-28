import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  userAgent: { type: String },
  visitCount: { type: Number, default: 1 },
  lastVisit: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Visitor = mongoose.model('Visitor', visitorSchema);
export default Visitor;
