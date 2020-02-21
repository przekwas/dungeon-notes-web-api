import { Router } from 'express';
import * as validators from '../../middlewares/validators';
import { userRegister } from '../../services/user-service';

const router = Router();

router.post('/', validators.userRegister, async (req, res) => {
	try {
		const user = req.body;
		const { token } = await userRegister(user);
		res.json({
			token
		});
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

export default router;
