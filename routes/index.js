var express = require('express');
var router = express.Router();
const { asyncHandler, handleValidationErrors } = require('../utils');
// const { userValidator, loginValidator } = require('./users')

/* GET register form. */
router.get('/register', (req, res, next) => {
  res.render('register');
});

router.get('/login', (req, res, next) => {
  res.render('login');
});


module.exports = router;
