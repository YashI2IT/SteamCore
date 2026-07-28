import express from 'express';
import { getAnalytics } from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/', getAnalytics); // For admin panel

export default router;
