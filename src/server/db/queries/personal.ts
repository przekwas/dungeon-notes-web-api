import { Query } from '../index';
import { TPersonal } from '../tables';

const all = () => Query<TPersonal[]>('SELECT * FROM personal');

const limit = (offset: number) => Query<TPersonal[]>('SELECT * FROM personal LIMIT 5 OFFSET ?', [offset]);

const one = (id: number) => Query<TPersonal[]>('SELECT * FROM personal WHERE id = ?', [id]);

const insert = (personal_note: { [key: string]: any }) => {
	return Query<{ insertId: number }>('INSERT INTO personal SET ?', personal_note);
};

const update = (id: number, personal_note: { [key: string]: any }) => {
	return Query('UPDATE personal SET ? WHERE id = ?', [personal_note, id]);
};

const destroy = (id: number) => Query('DELETE FROM personal WHERE id = ?', [id]);

export default {
	all,
	limit,
	one,
    insert,
    update,
    destroy
};
