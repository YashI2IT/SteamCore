import express from 'express';
import { createLead, getLeads, deleteLead } from '../controllers/leadController.js';

const router = express.Router();

router.post('/', createLead);
router.get('/', getLeads); // For admin panel
router.delete('/:id', deleteLead); // For admin panel

export default router;
