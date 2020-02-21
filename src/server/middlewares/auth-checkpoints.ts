import * as passport from 'passport';
import { RequestHandler } from 'express';
import { ReqUser } from '../utils/types';
import Logger from '../loaders/logger';

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
		Logger.warn('Request with Invalid/No Token!');
		res.sendStatus(401);
	}
};


