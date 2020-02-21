import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as path from 'path';
import * as passport from 'passport';
import routes from '../routes';
import '../middlewares/localstrategy';
import '../middlewares/bearerstrategy';

export default ({ app }: { app: express.Application }) => {
	app.get('/status', (req, res) => {
		res.status(200).end();
	});

	app.head('/status', (req, res) => {
		res.status(200).end();
	});

	app.enable('trust proxy');
	app.use(helmet());
	app.use(compression());
	app.use(cors());
	app.use(express.static('public'));
	app.use(morgan('dev'));
	app.use(express.json());
	app.use(passport.initialize());
	app.use(routes);

	app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

	app.use((req, res, next) => {
		const err: any = new Error('Not Found');
		err['status'] = 404;
		next(err);
	});

	const errorHandler: express.ErrorRequestHandler = (err, req, res, next) => {
		res.status(err.status || 500);
		res.json({
			errors: {
				message: err.message
			}
		});
	};

	app.use(errorHandler);
};
