import { Query } from '../index';
import { TCharacters } from '../tables';

const all = () => Query<TCharacters[]>('SELECT * FROM characters LIMIT 5');

const one = (id: number) => Query<TCharacters[]>('SELECT * FROM characters WHERE id = ?', [id]);

const insert = (character: { [key: string]: any }) => {
	return Query<{ insertId: number }>('INSERT INTO characters SET ?', character);
};

const update = (id: number, character: { [key: string]: any }) => {
	return Query('UPDATE characters SET ? WHERE id = ?', [character, id]);
};

const destroy = (id: number) => Query('DELETE FROM characters WHERE id = ?', [id]);

export default {
	all,
	one,
    insert,
    update,
    destroy
};
