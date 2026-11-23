import { Router } from 'express';
import {
  getTeam,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/team_controller.js';
import { verifyJWT } from '../middleware/auth_middleware.js';

const router = Router();

router.get('/', getTeam);
router.post('/', verifyJWT, createTeamMember);
router.put('/:id', verifyJWT, updateTeamMember);
router.delete('/:id', verifyJWT, deleteTeamMember);

export default router;
