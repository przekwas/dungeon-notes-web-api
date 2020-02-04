import db from '../db';
import { generateToken } from '../utils/security/tokens';
import { generateHash } from '../utils/security/passwords';

class UserService {
	async register(user: { username: string; password: string; hash?: string }) {
		user.hash = generateHash(user.password);
		delete user.password;
		const { insertId: user_id } = await db.users.insert(user);
		const token = await generateToken({ user_id });
		return { user_id, token, role: 'guest' };
	}
}

export default new UserService();
