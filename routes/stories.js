const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const { asyncHandler, handleValidationErrors } = require('../utils');
const { Story } = require('../db/models');

const storyValidators = [
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

/* GET users listing. */
router.get('/', asyncHandler(async(req, res, next) => {
  const stories = await Story.findAll({ order: [['title', 'ASC']]});
  res.render('storyFeed', { title: 'Stories', stories });
}));

router.get('/create', asyncHandler(async(req, res) => {
  res.render('storyForm');
}));

router.post('/create', asyncHandler(async(req, res, next) => {
  Story.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    author: "hi"
  })
}));

// router.get('/', asyncHandler(async (req, res) => {
//   const books = await db.Book.findAll({ order: [['title', 'ASC']] });
//   res.render('book-list', { title: 'Books', books });
// }));

// router.get('/book/add', csrfProtection, (req, res) => {
//   const book = db.Book.build();
//   res.render('book-add', {
//     title: 'Add Book',
//     book,
//     csrfToken: req.csrfToken(),
//   });
// });

module.exports = router;


//CRUD OPERATIONS GO HERE

//COMMENTS GO HERE

//LIKES GO HERE

//FOLLOW ROUTE GOES HERE
