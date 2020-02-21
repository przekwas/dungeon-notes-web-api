import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import config from '../../config';
import db from '../../db';
import Logger from '../../loaders/logger';

export const generateToken = (payload: IPayload) => {
	jwt.sign(payload, config.secret, { expiresIn: '15m' }, (err, token) => {
		if (err) {
			return err;
		} else {
			return token;
		}
	});
};

export const validateToken = (token: string) => {
	jwt.verify(token, config.secret, (err: any, payload: IPayload) => {
		if (err?.message === 'jwt expired') {
			let decoded = <IPayload>jwt.decode(token);
			let refreshedToken = generateToken(decoded);
		} else {
			return payload;
		}
	});
};

export interface IPayload {
	user_id: number;
	role: string;
	exp?: Date;
}
