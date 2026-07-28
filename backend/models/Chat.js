import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    index: true
  },
  role: {
    type: String,
    enum: ['user', 'assistant', 'system'],
    required: true
  },
  message: {
    type: String,
    required: true
  },
  browser: String,
  ip: String,
  device: String,
}, {
  timestamps: true
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
