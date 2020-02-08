import { Query } from '../index';
import { TPlaces } from '../tables';

const all = () => Query<TPlaces[]>('SELECT * FROM places');

const limit = (offset: number) => Query<TPlaces[]>('SELECT * FROM places LIMIT 5 OFFSET ?', [offset]);

const one = (id: number) => Query<TPlaces[]>('SELECT * FROM places WHERE id = ?', [id]);

const insert = (place: { [key: string]: any }) => {
	return Query<{ insertId: number }>('INSERT INTO places SET ?', place);
};

const update = (id: number, place: { [key: string]: any }) => {
	return Query('UPDATE places SET ? WHERE id = ?', [place, id]);
};

const destroy = (id: number) => Query('DELETE FROM places WHERE id = ?', [id]);

const search = (query: string) => Query<TPlaces[]>('SELECT * FROM characters WHERE name LIKE ?', [`%${query}%`]);

export default {
	all,
	limit,
	one,
    insert,
    update,
	destroy,
	search
};
