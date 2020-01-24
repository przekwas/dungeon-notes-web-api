import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as passport from 'passport';
import routes from './routes';
import './middlewares/localstrategy';
import './middlewares/bearerstrategy';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(express.json());
app.use(routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
