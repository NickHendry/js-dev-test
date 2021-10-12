/**
 * Application launch point! ;p
 */

// import env variables
require('dotenv').config();

const app = require('./app');
const http = require('http').Server(app);

// Start App
app.set('port', process.env.PORT || 7777);
const server = http.listen(app.get('port'), () => {
  console.log(`${process.env.APP_NAME} running → PORT ${server.address().port}`);
});

exports.http = http;