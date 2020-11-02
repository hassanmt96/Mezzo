const express = require('express');
const router = express.Router();
const { asyncHandler, handleValidationErrors } = require('../utils');

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
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


//CRUD OPERATIONS GO HERE

//COMMENTS GO HERE

//LIKES GO HERE

//FOLLOW ROUTE GOES HERE
