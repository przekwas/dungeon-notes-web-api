import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import config from '../../config';
import db from '../../db';

export const generateToken = async (payload: IPayload) => {
	try {
		const { insertId: token_id } = await db.tokens.insert(payload.user_id);
		payload.token_id = token_id;
		payload.uniq = crypto.randomBytes(12).toString('hex');
		const token = jwt.sign(payload, config.secret);
		await db.tokens.update(payload.token_id, payload.uniq, token);
		return token;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const validateToken = async (token: string) => {
	try {
		const payload = <IPayload>jwt.verify(token, config.secret);
		const [matchedRow] = await db.tokens.match(payload.token_id, payload.uniq, token);
		if (matchedRow && matchedRow.id === payload.token_id) {
			return payload;
		} else {
			throw new Error('Uh oh.');
		}
	} catch (error) {
		console.log(error);
	}
};

export interface IPayload {
	user_id: number;
	token_id?: number;
	uniq?: string;
}
