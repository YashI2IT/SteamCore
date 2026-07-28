import express from 'express';
import { handleChat, getHistory, clearHistory } from '../controllers/chatController.js';

const router = express.Router();

router.post('/', handleChat);
router.get('/history/:sessionId', getHistory);
router.delete('/history/:sessionId', clearHistory);

export default router;
