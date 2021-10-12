/**
 * Global Routes
 *
 * Note: These routes will be called before the others. So you can 'block / catch' the route here
 *
 */

const express = require('express');
var router = express.Router();

router.get('/version', (req, res) => {
  res.json({
    message: "Welcome to JS Test 101",
    version: process.env.VERSION
  });
});

// Export
module.exports = router;