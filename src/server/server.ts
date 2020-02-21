import * as express from 'express';
import Logger from './loaders/logger';

async function startServer() {
	const app = express();

	await require('./loaders').default(app);

	const port = process.env.PORT || 8080;

	app.listen(port, () => {
		Logger.info(`
          #########################################
              Server listening on port: ${port}
          #########################################
        `);
	}).on('error', err => {
		if (err) {
			Logger.error(err);
			process.exit(1);
			return;
		}
	});
}

startServer();