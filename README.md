# viking-garage-api
VIKING GARAGE API

### Setup
#### Add .env file in the root directory with configuration
Check out .env.example with sample data

## Requirements
Homebrew
Node.js

## Config
To run application you have to set env vars. Check `app.json` for required variables and default values. For local build you can create `.env` file in root directory with variables (for details check out [dotenv](https://github.com/motdotla/dotenv))

## One command setup
```
npm run init
```

## Manual setup
Please check the file `scripts/initialize.sh` and files referenced therein, and simply follow the flow.

## Commands
```
npm run dev    # for development (hot reloading)
npm test       # for running tests with mocha
npm tdd        # for running tests continuously mocha, TDD style
npm start      # for production environment
```

## Logs
Application use [debug](https://github.com/visionmedia/debug) (npm module) for logs (checkout link for docs). To enable logs from the API services, set env var `DEBUG=api:*`. To add logs to a new module:
```
import debug from 'debug';
const log = debug('api:NameOfModule');
log('go to stout with prefix "api:NameOfModule"')
```

## Dev env
- Sublime
- [DocBlockr](https://github.com/spadgos/sublime-jsdocs) plugin for Sublime jsDoc
- [TSLint](https://github.com/lavrton/SublimeLinter-contrib-tslint) TypeScript linter for Sublime

## Additional info
- swagger-ui: [localhost:4000/docs?url=http://localhost:4000/swagger.json](http://localhost:4000/docs?url=http://localhost:4000/swagger.json)
- openAPI spec: [localhost:4000/swagger.json](http://localhost:4000/swagger.json)
