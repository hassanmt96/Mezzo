const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { Story, Follow, User } = require('../db/models');


/* GET home page/feed */
router.get('/', asyncHandler(async(req, res, next) => {
  const stories = await Story.findAll({ order: [['title', 'ASC']]});
  // const followerId = /* insert session user.id */
  // const following = Follow.findAll({ where: followerId });
  // const authorId = following.followingId;
  // const followingStories = Story.findAll({ where: authorId });
  res.render('index', { stories });
}));





module.exports = router;
