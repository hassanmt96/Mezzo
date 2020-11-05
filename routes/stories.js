const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils');
const { Story, User, Comment } = require('../db/models');


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
    where: storyId
  });

  res.render('readStory', { story, comments });
}));

router.post('/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const storyId = parseInt(req.params.id);
  const story = await Story.findByPk(storyId, { include: User, Comment });

  res.render('readStory', { story });
}));

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
