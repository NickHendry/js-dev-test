/**
 * This is where the magic begins
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const cors = require('cors');

// Create the express app
const app = express();

const logResponseTime = require('./handlers/responseTimeLog');

app.use(cors());

// Serve up static files from the public and uploads folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// Take the raw requests and turns them into usable properties
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Log Response Times
app.use(logResponseTime);

// After alllll the above middleware, we finally hand our routes
app.use('/', routes);

// If the above routes didnt work, we 404 them and forward to errorhandler
app.use(errorHandlers.notFound);

// Else this was a really bad error we didnt expect!

// Add stack trace if in dev
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandlers.developmentErrors);
}

// Production Error Handler
app.use(errorHandlers.productionErrors);

// Done! Export it so we can start in start.js
module.exports = app;