const express = require('express');
const { check } = require('express-validator');
const db = require('../db/models');
const { User } = require('../db/models')
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
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 100 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({
        where: { email: value }
      })
      .then((user) => {
        if (user) {
          return Promise.reject('The provided email is already in use by another account')
        }
      })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords must match')
      }
    }),
];

const loginValidator = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your email')
    .custom((value) => {
      return db.User.findOne({
        where: { email: value }
      })
      .then((user) => {
        if (!user) {
          return Promise.reject('This email is not being used by an account')
      }
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your password')
  })
]


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
