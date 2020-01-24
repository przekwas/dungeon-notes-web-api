import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import db from '../db';
import { compareHash } from '../utils/security/passwords';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
	new LocalStrategy.Strategy(
		{
			usernameField: 'username'
		},
		async (username, password, done) => {
			try {
				const [user] = await db.users.findUsername(username);
				if (user && compareHash(password, user.hash)) {
					delete user.hash;
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (error) {
				console.log(error);
				done(error);
			}
		}
	)
);
