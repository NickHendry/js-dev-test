const express = require('express');
var router = express.Router();

const controller = require('./checkout.controller');
const { catchErrors } = require('../../handlers/errorHandlers');

router.post('/', catchErrors(controller.processOrder));

module.exports = router;