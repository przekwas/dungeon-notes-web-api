import { Query } from '../index';
import { TTokens } from '../tables';

const match = (id: number, uniq: string, val: string) => {
	return Query<TTokens[]>('SELECT * FROM tokens WHERE id = ? AND uniq = ? AND val = ?', [id, uniq, val]);
};

const insert = (user_id: number) => Query<{ insertId: number }>('INSERT INTO tokens (user_id) VALUE (?)', [[user_id]]);

const update = (id: number, uniq: string, val: string) => {
	return Query('UPDATE tokens SET uniq = ?, val = ? WHERE id = ?', [uniq, val, id]);
};

export default {
	match,
	insert,
	update
};
