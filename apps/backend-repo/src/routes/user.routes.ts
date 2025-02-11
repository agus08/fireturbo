import { Router } from 'express';
import { updateUserDataController, fetchUserDataController } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router: Router = Router();

router.post('/update-user-data', authMiddleware, updateUserDataController);
router.get('/fetch-user-data', authMiddleware, fetchUserDataController);
router.get('/status', (req, res) => { res.status(200).json({ status: 'ok' }) });

export default router;