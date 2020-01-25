import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/all', async (req, res) => {
	try {
		const places = await db.places.all();
		res.json(places);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.get('/:placeid?', async (req, res) => {
	const placeid = Number(req.params.placeid);
	const offset = Number(req.query.offset) || 0;
	if (placeid) {
		try {
			const [place] = await db.places.one(placeid);
			res.json(place);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code is trash.  :(');
		}
	} else {
		try {
			const places = await db.places.limit(offset);
			res.json(places);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code is trash.  :(');
		}
	}
});

router.post('/', async (req, res) => {
	try {
		req.body.user_id = 1;
		req.body.campaign_id = 1;
		const { insertId: placeid } = await db.places.insert(req.body);
		res.json(placeid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.put('/:placeid', async (req, res) => {
	const placeid = Number(req.params.placeid);
	try {
		const result = await db.places.update(placeid, req.body);
		res.json(placeid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.delete('/:placeid', async (req, res) => {
	const placeid = Number(req.params.placeid);
	try {
		const result = await db.places.destroy(placeid);
		res.json(placeid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});
export default router;
