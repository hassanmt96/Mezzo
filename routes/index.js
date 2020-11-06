const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { Story, Follow, User } = require('../db/models');


/* GET home page/feed */
/* beginning code for following feed stretch code */
router.get('/', asyncHandler(async(req, res, next) => {
  const stories = await Story.findAll({ order: [['title', 'ASC']]});
  // const userId = res.locals.user.id;
  // console.log(`THIS IS THE ID: ${userId}`)

  // const following = await Follow.findAll({ where: { followerId: userId } }).map(async(follow) => ({
  //   id: follow.id,
  //   followingId: follow.followingId,
  //   followerId: follow.followerId
  // }));
  // console.log(following);
  // const authorIdArr = [];
  // for (let follow in following) {
  //  const id = follow.followingId;
  //  authorIdArr.push(id);
  // }
  // const followingStories = [];
  // for (authorId in authorIdArr) {
  //   followingStories += await Story.findAll({ where: authorId });
  // }
  res.render('index', { stories });
}));

router.get('/about', asyncHandler(async(req, res) => {
  res.render('about');
}));

module.exports = router;
