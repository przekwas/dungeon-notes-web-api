import { Request } from 'express';
import { TUsers } from '../../db/tables';

export interface ReqUser extends Request {
	user: TUsers;
}
