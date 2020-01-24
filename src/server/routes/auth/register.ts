import { Router } from 'express';
import db from '../../db';
import { generateToken } from '../../utils/security/tokens';
import { generateHash } from '../../utils/security/passwords';

const router = Router();

router.post('/', async (req, res) => {
	try {
		req.body.hash = generateHash(req.body.password);
		const { insertId: user_id } = await db.users.insert(req.body);
		const token = await generateToken({ user_id });
		res.json({
			token,
			user_id,
			role: 'guest'
		});
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

export default router;
