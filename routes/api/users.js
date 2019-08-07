const express = require('express');
const router = express.Router();

// @route  POST api/users
// @decr   Register route
// @access Public
router.get('/', (req, res) => {
  console.log(req.body);
  res.send('User route');
});

router.get('/register', (req, res) => {
  console.log(req.body);
  res.send('User register route');
});

module.exports = router;
