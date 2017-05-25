import * as dotenv from 'dotenv';
dotenv.config();
import './controllers';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import { RegisterRoutes } from './routes';
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
app.use('/docs', express.static(__dirname + '/../dist/swagger-ui'));
app.use('/swagger.json', (req, res) => {
  res.sendfile('./dist/swagger.json');
});

app.use(cors({

}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

passportConfig(app);
RegisterRoutes(app);

app.use((err, req, res, next) => {
  log(`Unexpected error ${err}`);
  res.status(500).send(`Unexpected error ${err}`);
});

const port = process.env.PORT || '4000';

app.listen(port, () => {
  log(`Server running at ${process.env.VG_HOST}:${port}`);
});

export default app;
