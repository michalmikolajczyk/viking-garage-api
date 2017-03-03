import './controllers';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import { RegisterRoutes } from './routes';
import { config as passportConfig } from './helpers/passport';
import config from './config';

const app = express();

app.use('/docs', express.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', (req, res) => {
  res.sendfile('./dist/swagger.json');
});

app.use(cors({
  origin: config.origin,
  credentials: true,
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

passportConfig(app);
RegisterRoutes(app);

app.use((err, req, res, next) => {
  console.log(`Unexpected error ${err}`);
  res.status(500).send(`Unexpected error ${err}`);
});

app.listen(config.port, () => {
  console.log(`Server running at ${config.host}:${config.port}`);
});

export default app;
