import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  companyName: { type: String },
  industry: { type: String },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  city: { type: String },
  requirement: { type: String, required: true }, // e.g., 'Quotation', 'Energy Audit'
  budget: { type: String },
  preferredContactMethod: { type: String, enum: ['Email', 'Phone', 'WhatsApp'] },
  message: { type: String },
  sessionId: { type: String },
  status: { type: String, enum: ['New', 'Contacted', 'Closed'], default: 'New' }
}, {
  timestamps: true
});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
