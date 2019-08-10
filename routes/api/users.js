const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route  POST api/users
// @decr   Register route
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    if (req.body.name == undefined) {
      console.log('name is undefined.');
    } else if (req.body.name == '') {
      console.log('name is empty string.');
    } else {
      console.log('name is a string:' + req.body.name);
    }
    res.send('User route');
  }
);

router.get('/register', (req, res) => {
  console.log(req.body);
  res.send('User register route');
});

module.exports = router;
