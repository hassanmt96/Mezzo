var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('test')
  res.render('index', { title: 'Mezzo' });
  // res.send('test')
});

module.exports = router;
