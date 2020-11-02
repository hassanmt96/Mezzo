const express = require('express');
const { check } = require('express-validator');
const { User } = require('../db/models')
const { asyncHandler } = require('../utils')
const router = express.Router();
const { asyncHandler, handleValidationErrors } = require('../utils');


const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long'),
];



/* GET users listing. */
router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});


//getting user by id
router.get('/:id(\\d+)', asyncHandler(async(req, res, next)=> {
  const user = await User.findByPk(req.params.id)
  res.render(req.user);
}));







module.exports = router;


//LOGIN & SIGNUP ROUTES GO HERE

//delete user route
