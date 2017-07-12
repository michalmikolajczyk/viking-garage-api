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
Please check the file `scripts/initialize.sh` for instructions

## Commands
```
npm run dev    # for development (hot reloading)
npm test       # for running tests with mocha
npm tdd        # for running tests continuously mocha, TDD style
npm start      # for production environment
```

## Dev env
- Sublime
- [DocBlockr](https://github.com/spadgos/sublime-jsdocs) plugin for Sublime jsDoc
- [TSLint](https://github.com/lavrton/SublimeLinter-contrib-tslint) TypeScript linter for Sublime

## Additional info
- swagger-ui: [localhost:4000/docs?url=http://localhost:4000/swagger.json](http://localhost:4000/docs?url=http://localhost:4000/swagger.json)
- openAPI spec: [localhost:4000/swagger.json](http://localhost:4000/swagger.json)
