import { Query } from '../index';
import { TPlaces } from '../tables';

const all = () => Query<TPlaces[]>('SELECT * FROM places LIMIT 5');

const one = (id: number) => Query<TPlaces[]>('SELECT * FROM places WHERE id = ?', [id]);

const insert = (place: { [key: string]: any }) => {
	return Query<{ insertId: number }>('INSERT INTO places SET ?', place);
};

const update = (id: number, place: { [key: string]: any }) => {
	return Query('UPDATE places SET ? WHERE id = ?', [place, id]);
};

const destroy = (id: number) => Query('DELETE FROM places WHERE id = ?', [id]);

export default {
	all,
	one,
    insert,
    update,
    destroy
};
