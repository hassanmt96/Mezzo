const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');


/* GET home page. */
router.get('/', requireAuth, function (req, res, next) {
  console.log('test')
  res.render('index', { title: 'Mezzo' });
  // res.send('test')
});



module.exports = router;
