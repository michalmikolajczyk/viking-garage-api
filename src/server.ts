// read env vars from local .env file
import * as dotenv from 'dotenv';
dotenv.config();

// check for required env vars declared in app.json
import * as fs from 'fs';
const appJSON = fs.readFileSync('app.json', 'utf8');
const appConf = JSON.parse(appJSON);

Object.keys(appConf.env).forEach((key) => {
  if (appConf.env[key].required && process.env[key] === undefined) {
    console.error(key, 'is undefined!');
    console.error('You should set all env vars!');
    console.error('For details check app.json and README');
    process.exit(1);
  }
});

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
