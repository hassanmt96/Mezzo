const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { Story, User } = require('../db/models');


/* GET home page/feed */
router.get('/', asyncHandler(async(req, res, next) => {
  const stories = await Story.findAll({ include: User, order: [['title', 'ASC']]});
  res.render('index', { title: 'Stories', stories });
}));





module.exports = router;
