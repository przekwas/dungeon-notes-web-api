import { Query } from '../index';
import { TEvents } from '../tables';

const all = () => Query<TEvents[]>('SELECT * FROM events');

const limit = (offset: number) => Query<TEvents[]>('SELECT * FROM events LIMIT 5 OFFSET ?', [offset]);

const one = (id: number) => Query<TEvents[]>('SELECT * FROM events WHERE id = ?', [id]);

const insert = (event: { [key: string]: any }) => {
	return Query<{ insertId: number }>('INSERT INTO events SET ?', event);
};

const update = (id: number, event: { [key: string]: any }) => {
	return Query('UPDATE events SET ? WHERE id = ?', [event, id]);
};

const destroy = (id: number) => Query('DELETE FROM events WHERE id = ?', [id]);

const search = (query: string) => Query<TEvents[]>('SELECT * FROM characters WHERE name LIKE ?', [`%${query}%`]);

export default {
	all,
	limit,
	one,
    insert,
    update,
	destroy,
	search
};