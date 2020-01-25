import * as passport from 'passport';
import { Request, RequestHandler } from 'express';
import { TUsers } from '../db/tables';

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
	return passport.authenticate('bearer', (err, user) => {
		if (user) req.user = user;
		next();
	})(req, res, next);
};

export const isGuest: RequestHandler = (req: ReqUser, res, next) => {
	if (req.user && req.user.role === 'guest') {
		next();
	} else {
		res.sendStatus(401);
	}
};

interface ReqUser extends Request {
	user: TUsers;
}
