const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { asyncHandler, handleValidationErrors } = require('../utils');


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('test')
  res.render('index', { title: 'Mezzo' });
  // res.send('test')
});



module.exports = router;
