import { Router } from 'express';
import { tokenCheckpoint } from '../../middlewares/auth-checkpoints';
import personalRouter from './personal';

const router = Router();

router.use(tokenCheckpoint);
router.use('/personal', personalRouter);

export default router;
