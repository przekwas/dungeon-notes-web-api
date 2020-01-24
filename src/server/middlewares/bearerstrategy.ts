import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';
import db from '../db';
import { validateToken, IPayload } from '../utils/security/tokens';

passport.use(
	new BearerStrategy.Strategy(async (token, done) => {
		try {
			const payload = await validateToken(token);
			const [user] = await db.users.findId(payload.user_id);
			if (user && user.id === payload.user_id) {
				delete user.hash;
				done(null, user);
			} else {
				done(null, false);
			}
		} catch (error) {
			console.log(error);
			done(error);
		}
	})
);
