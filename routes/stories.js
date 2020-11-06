const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils');
const { Story, User, Like, Comment } = require('../db/models');


const storyValidator = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title')
    .isLength({ max: 200 })
    .withMessage('Title can not be more than 200 characters long'),
  check('subtitle')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a subtitle')
    .isLength({ max: 250 })
    .withMessage('Subtitle can not be more than 250 characters long'),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide content')
]


/* GET full story view */
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const storyId = parseInt(req.params.id);
  const story = await Story.findByPk(storyId, {
    include: User
  });
  const comments = await Comment.findAll({
    where: { storyId }
  });
  console.log(comments);
  res.render('readStory', { story, comments });
}));

router.post('/:id(\\d+)/comment', asyncHandler(async(req, res) => {
  const storyId = req.params.id;
  // console.log(req.body);
  const story = await Story.findByPk(storyId, {
    include: User
  });
  // console.log('test')
  const {comment} = req.body
  await res.json(req.body)
  await Comment.create({
    userId: res.locals.user.id,
    storyId: req.params.id,
    comment,
  })
  const comments = await Comment.findAll({
    where: { storyId }
  });
  res.json(comments);
}));

router.post('/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const story = await Story.findByPk(storyId, { include: [ User, Like ]});
  let isLiked = false;
  story.Likes.forEach((like)=> {
    const { userId } = like;
    if(userId === res.locals.user.id){
      isLiked = true;
    }
  })
  res.render('readStory', { story, isLiked });
  // res.render('readStory', { story });
}));


router.post('/:id/like', asyncHandler(async(req, res)=> {
  const story = await Story.findByPk(req.params.id, { include: [ User, Like ]});
  let isLiked = false;
  const storyId = req.params.id;
  const userId = res.locals.user.id;
  story.Likes.forEach((like)=> {
    const { userId } = like;
    if(userId === res.locals.user.id){
      isLiked = true;
    }
  })
  if(!isLiked){
    await Like.create({ storyId, userId });
  } else {
    let likes = await Like.findOne({ where: {storyId: req.params.id, userId: res.locals.user.id }});
    await likes.destroy();
  }
  res.json(isLiked);
}))

//CRUD OPERATIONS GO HERE
router.get('/create', csrfProtection, asyncHandler(async(req, res) => {
  res.render('storyForm', { token: req.csrfToken() });
}));

router.post('/create', asyncHandler(async(req, res, next) => {
  const newStory = await Story.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    authorId: res.locals.user.id,
    image: req.body.image
  })
   res.redirect(`/stories/${newStory.id}`);
}));







module.exports = router;


//COMMENTS GO HERE

//LIKES GO HERE

//FOLLOW ROUTE GOES HERE
