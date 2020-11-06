const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils');
const { Story, User } = require('../db/models');


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
  const story = await Story.findByPk(storyId, { include: User });
  console.log(story);
  res.render('readStory', { story });
}));

//CRUD OPERATIONS GO HERE
router.get('/create', asyncHandler(async(req, res) => {
  res.render('storyForm');
}));

router.post('/create', csrfProtection, asyncHandler(async(req, res, next) => {
  const newStory = await Story.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    author: "hi",
    csrfToken: req.csrfToken()
  })
   res.redirect(`/${newStory.id}`);
}));



//FOLLOW ROUTES GO HERE 


router.get("/:id(\\d+)/follow", asyncHandler(async (req, res) => {
  const follower = await Follow.findOne({
    where: { followingId: req.params.id },
    include: {
      model: User,
      as: "Follower",
      attributes: ["id", "firstName", "lastName"]
    },
  })
  res.json(follower)
}))


//GETS A LIST OF FOLLOWERS FOR A SPECIFIC USER
router.get("/:id(\\d+)/followers", asyncHandler(async (req, res) => {
    const followers = await Follow.findAll({
      where: { followingId: req.params.id },
      include: {
        model: User,
        as: "Follower",
        attributes: ["id", "firstName", "lastName"]
      },
    })
   res.json(followers)
  }))


module.exports = router;


//COMMENTS GO HERE

//LIKES GO HERE

//FOLLOW ROUTE GOES HERE
