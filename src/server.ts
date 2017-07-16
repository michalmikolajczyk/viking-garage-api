import '../setup';
import './controllers';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import { registerRoutes } from './routes';
import { config as passportConfig } from './helpers/passport';
import debug from 'debug';
const log = debug('api:server');

const app = express();
app.options('*', cors({
  origin: '*',
  methods: 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
}));
app.use('/docs', express.static(path.resolve('dist/swagger-ui/dist')));
app.use('/swagger.json', (req, res) => res.sendfile(path.resolve('dist/swagger.json')));

app.use(cors({

}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

passportConfig(app);
registerRoutes(app);

app.use((err, req, res, next) => {
  log(`Unexpected error ${err}`);
  res.status(500).send(`Unexpected error`);
});

const port = process.env.PORT || '4000';

app.listen(port, () => {
  log(`Server running at ${process.env.VG_HOST}:${port}`);
});

export default app;
