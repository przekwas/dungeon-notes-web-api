import { Router } from 'express';
import validators from '../../middlewares/validators';
import userService from '../../services/user-service';

const router = Router();

router.post('/', validators.userRegister, async (req, res) => {
	try {
		const user = req.body;
		const { user_id, role, token } = await userService.register(user);
		res.json({
			token,
			user_id,
			role
		});
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

export default router;
