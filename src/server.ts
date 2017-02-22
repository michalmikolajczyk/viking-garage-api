// controllers need to be referenced in order to get crawled by the tsoa generator
import './controllers'
import * as express from 'express'
import * as cors from 'cors'
import * as session from 'express-session'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as methodOverride from 'method-override'
import { RegisterRoutes } from './routes'
import passportConfig from './helpers/passport'
import config from './config'

const app = express()

app.use(cors({
  origin: config['origin'],
  credentials: true,
}))
app.use(cookieParser())
app.use(session({
  secret: config['session'],
  resave: false,
  saveUninitialized: false,
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride());

passportConfig(app)
RegisterRoutes(app)

app.use('/docs', express.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', (req, res) => {
    res.sendfile('./dist/swagger.json')
})

app.get('/', function(req, res) {
  res.send('Hello world')
})

app.listen(config['port'], function() {
  console.log(`Server running at ${config['host']}:${config['port']}`)
})

export default app
