/**
 * All routes
 */

const express = require('express');
var router = express.Router();

// Global Routes
router.use('/', require('./global.routes.js'));

// Module Routes
router.use('/products', require('../modules/products/products.routes'));
router.use('/checkout', require('../modules/checkout/checkout.routes'));

// Export
module.exports = router;