var express = require('express');
var router = express.Router();
const { asyncHandler, handleValidationErrors } = require('../utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout');
});

module.exports = router;
