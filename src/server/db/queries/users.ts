import { Query } from '../index';
import { TUsers } from '../tables';

const findUsername = (username: string) => {
	return Query<TUsers[]>('SELECT * FROM users WHERE username = ?', [username]);
};

const findId = (id: number) => {
	return Query<TUsers[]>('SELECT * FROM users WHERE id = ?', [id]);
};

const insert = (user: any) => Query<{ insertId: number }>('INSERT INTO users (username, hash) VALUE (?)', [[user.username, user.hash]]);

export default {
	findUsername,
	findId,
	insert
};
