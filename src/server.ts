import '../setup';
import './controllers';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import { registerRoutes } from './routes';
import { config as passportConfig } from './helpers/passport';
import debug from 'debug';
const log = debug('api:server');
const cookieParser = require('cookie-parser')
const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {  
  res.header('Access-Control-Allow-Origin', `${process.env.LIMIT_CORS || req.headers.origin}`);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const acceptableMethods = ['PUT', 'PATCH', 'POST', 'DELETE'];
app.use((req, res, next) => {
  if (acceptableMethods.indexOf(req.method) > -1 && req.headers['content-type'] !== 'application/json') return res.send(406);
  next();
});

app.use('/docs', express.static(path.resolve('dist/swagger-ui/dist')));
app.use('/swagger.json', (req, res) => res.sendfile(path.resolve('dist/swagger.json')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

passportConfig(app);
registerRoutes(app);

app.use((err, req, res, next) => {
  log(`Unexpected error ${err}`);
  res.status(500).send(`Unexpected error`);
});

const port = process.env.PORT || '4000';

if (process.env.NODE_ENV === 'production') {
  app.listen(port, () => {
    log(`Server running at ${process.env.VG_HOST}:${port}`);
  }); 
} else {
  const privateKey = fs.readFileSync(__dirname + '/../ssl/server.key', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/../ssl/server.crt', 'utf8');
  const credential = { key: privateKey, cert: certificate };
  
  https.createServer(credential, app).listen(port, () => {
    log(`Server running at ${process.env.VG_HOST}:${port}`);
  });
}

export default app;
