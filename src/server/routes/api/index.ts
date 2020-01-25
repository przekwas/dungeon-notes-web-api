import { Router } from 'express';
import { tokenCheckpoint } from '../../middlewares/auth-checkpoints';
import personalRouter from './personal';
import charactersRouter from './characters';
import eventsRouter from './events';
import placesRouter from './places';

const router = Router();

router.use(tokenCheckpoint);
router.use('/personal', personalRouter);
router.use('/characters', charactersRouter);
router.use('/events', eventsRouter);
router.use('/places', placesRouter);

export default router;