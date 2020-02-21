import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';
import db from '../db';
import { validateToken } from '../utils/security/tokens';

passport.use(
	new BearerStrategy.Strategy(async (token, done) => {
		const payload = validateToken(token);
		if (payload) {
			done(null, payload);
		} else {
			done('Invalid Token');
		}
	})
);
