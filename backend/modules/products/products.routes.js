const express = require('express');
var router = express.Router();

const controller = require('./products.controller');
const { catchErrors } = require('../../handlers/errorHandlers');

router.get('/', catchErrors(controller.getAllProducts));

module.exports = router;