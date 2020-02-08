import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/all', async (req, res) => {
	try {
		const events = await db.events.all();
		res.json(events);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.get('/search', async (req, res) => {
	const query = req.query.q;
	try {
		const events = await db.events.search(query);
		res.json(events);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.get('/:eventid?', async (req, res) => {
	const eventid = Number(req.params.eventid);
	const offset = Number(req.query.offset) || 0;
	if (eventid) {
		try {
			const [event] = await db.events.one(eventid);
			res.json(event);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code is trash.  :(');
		}
	} else {
		try {
			const events = await db.events.limit(offset);
			res.json(events);
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
		const { insertId: eventid } = await db.events.insert(req.body);
		res.json(eventid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.put('/:eventid', async (req, res) => {
	const eventid = Number(req.params.eventid);
	try {
		const result = await db.events.update(eventid, req.body);
		res.json(eventid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.delete('/:eventid', async (req, res) => {
	const eventid = Number(req.params.eventid);
	try {
		const result = await db.events.destroy(eventid);
		res.json(eventid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});
export default router;
