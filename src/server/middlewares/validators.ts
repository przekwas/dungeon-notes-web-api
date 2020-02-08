import db from '../db';
import { RequestHandler } from 'express';
import { ReqUser } from '../utils/types';

const userRegister: RequestHandler = async (req: ReqUser, res, next) => {
    console.log(req.body);
    let [user] = await db.users.findUsername(req.body.username);
    if (req.body.username === user.username) {
        res.status(400).json('Username already exists.')
    } else {
        next();
    }
}

export {
    userRegister
}