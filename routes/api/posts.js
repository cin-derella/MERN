const express = require('express');
const router = express.Router();

// @route  GET api/auth
// @decr   Test route
// @access Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
