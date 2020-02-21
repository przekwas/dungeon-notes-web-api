import { Router, Request } from 'express';
import * as passport from 'passport';
import { generateToken } from '../../utils/security/tokens';
import { TUsers } from '../../db/tables';

const router = Router();

router.post('/', passport.authenticate('local'), async (req: ReqUser, res) => {
	const { id, role } = req.user;
	try {
		const token = await generateToken({ user_id: id, role });
		res.json({
			token
		});
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

interface ReqUser extends Request {
	user: TUsers;
}

export default router;
