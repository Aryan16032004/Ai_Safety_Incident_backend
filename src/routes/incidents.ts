import { Router } from 'express';
import {
  getAllIncidents,
  createIncident,
  getIncidentById,
  deleteIncident
} from '../controllers/incidents';

const router = Router();

router.get('/', getAllIncidents);
router.post('/', createIncident);
router.get('/:id', getIncidentById);
router.delete('/:id', deleteIncident);

export default router;