import { Router } from 'express';
import { isGuest } from '../../middlewares/auth-checkpoints';

const router = Router();

router.get('/test', isGuest, async (req, res) => {
    try {
        res.json('Testing');
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

export default router;
