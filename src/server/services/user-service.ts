import db from '../db';
import { generateToken } from '../utils/security/tokens';
import { generateHash } from '../utils/security/passwords';

export const userRegister = async (user: IUser) => {
	user.hash = generateHash(user.password);
	delete user.password;
	const { insertId: user_id } = await db.users.insert(user);
	const token = generateToken({ user_id, role: 'guest' });
	return { token };
};

interface IUser {
	username: string;
	password: string;
	hash: string;
}