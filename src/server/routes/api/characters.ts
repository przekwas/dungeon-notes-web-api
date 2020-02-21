import { Router } from 'express';
import db from '../../db';
import { isGuest } from '../../middlewares/auth-checkpoints';

const router = Router();

router.get('/all', isGuest, async (req, res) => {
	try {
		const characters = await db.characters.all();
		res.json(characters);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.get('/search', async (req, res) => {
	const query = req.query.q;
	try {
		const characters = await db.characters.search(query);
		res.json(characters);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.get('/:characterid?', async (req, res) => {
	const characterid = Number(req.params.characterid);
	const offset = Number(req.query.offset) || 0;
	if (characterid) {
		try {
			const [character] = await db.characters.one(characterid);
			res.json(character);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code is trash.  :(');
		}
	} else {
		try {
			const characters = await db.characters.limit(offset);
			res.json(characters);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code is trash.  :(');
		}
	}
});

router.post('/', async (req, res) => {
	console.log(req.body);
	try {
		req.body.user_id = 1;
		req.body.campaign_id = 1;
		const { insertId: characterid } = await db.characters.insert(req.body);
		res.json(characterid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.put('/:characterid', async (req, res) => {
	const characterid = Number(req.params.characterid);
	try {
		const result = await db.characters.update(characterid, req.body);
		res.json(characterid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.delete('/:characterid', async (req, res) => {
	const characterid = Number(req.params.characterid);
	try {
		const result = await db.characters.destroy(characterid);
		res.json(characterid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});
export default router;
