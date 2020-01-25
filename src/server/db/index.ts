import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		pool.query(query, values, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

import users from './queries/users';
import tokens from './queries/tokens';
import characters from './queries/characters';
import events from './queries/events';
import places from './queries/places';
import personal from './queries/personal';
export default {
	users,
	tokens,
	characters,
	events,
	places,
	personal
};
