import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:personalid?', async (req, res) => {
	const personalid = Number(req.params.personalid);
	if (personalid) {
		try {
			const [personal] = await db.personal.one(personalid);
			res.json(personal);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code is trash.  :(');
		}
	} else {
		try {
			const personal = await db.personal.all();
			res.json(personal);
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
		const { insertId: personalid } = await db.personal.insert(req.body);
		res.json(personalid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.put('/:personalid', async (req, res) => {
	const personalid = Number(req.params.personalid);
	try {
		const result = await db.personal.update(personalid, req.body);
		res.json(personalid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});

router.delete('/:personalid', async (req, res) => {
	const personalid = Number(req.params.personalid);
	try {
		const result = await db.personal.destroy(personalid);
		res.json(personalid);
	} catch (error) {
		console.log(error);
		res.status(500).json('My code is trash.  :(');
	}
});
export default router;

