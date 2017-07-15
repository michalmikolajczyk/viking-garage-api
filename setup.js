// read env vars from local .env file
const dotenv = require('dotenv');
dotenv.config();

// check for required env vars declared in app.json
const fs = require('fs');
const appJSON = fs.readFileSync('app.json', 'utf8');
const appConf = JSON.parse(appJSON);

let unset = false;
Object.keys(appConf.env).forEach((key) => {
  if (appConf.env[key].required && process.env[key] === undefined) {
    console.error(key, 'is undefined!');
    unset = true;
  }
});

if (unset) {
  console.error('You should set all env vars!');
  console.error('For details check app.json and README');
  process.exit(1);
}
