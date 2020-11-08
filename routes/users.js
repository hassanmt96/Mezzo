const express = require("express");
const { check, validationResult } = require("express-validator");
const { User, Follow } = require("../db/models");
const { asyncHandler, csrfProtection, handleValidationErrors, } = require("../utils");
const { loginUser, logoutUser, requireAuth } = require("../auth");
const router = express.Router();
const bcrypt = require("bcryptjs");

const isPassword = async (password, hash) =>
  await bcrypt.compare(password, hash);
const db = require('../db/models');
const { token } = require("morgan");

//USER VALIDATION CHECKER
const userValidator = [
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
      return User.findOne({
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
      return true;
    }),
];

//LOGIN VALIDATION CHECKER
const loginValidator = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your email')
    .custom((value) => {
      return User.findOne({
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

//GET FOR USER LISTING
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

//GETTING A SINGLE USER BY ID
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    res.render(req.user);
  })
);

//LOGIN GET AND POST ROUTE
router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    res.render("login", { token: req.csrfToken() });
  })
);

router.post(
  "/login",
  csrfProtection, loginValidator,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const validationErrors = validationResult(req)
    let errors = []
    // console.log(validationErrors)
    if (validationErrors.isEmpty()) {
      const user = await User.findOne({ where: { email } });
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.password.toString())
        if (passwordMatch) {
          loginUser(req, res, user)
          return res.redirect('/')
        }
      }
      errors.push('Login failed. Please provide correct input for either fields.')
    } else {
      errors = validationErrors.array().map((error) => error.msg)
      res.render('login', { errors })
    }
    res.render('login', { title: "Login", token: req.csrfToken(), errors, email })
  })
);

//LOGOUT ROUTE

router.get("/logout",
  asyncHandler(async (req, res, next) => {
    await logoutUser(req, res);
    res.redirect("/");
  })
);

router.post(
  "/logout",
  asyncHandler(async (req, res, next) => {
    await logoutUser(req, res);
    res.redirect("/");
  })
);

//Avatar Picture Route

router.put("/avatar", asyncHandler(async(req, res, next)=> {
  const profilePic = await User.update({
    image: req.body.image
  })
  res.redirect(`/users/${profilePic.id}`);
}));

//REGISTER GET AND POST ROUTE
router.get(
  "/register",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const user = User.build();
    res.render("register", { user, token: req.csrfToken() });
  })
);

router.post("/register", csrfProtection, userValidator, asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // let hash = await

  const user = User.build({
    firstName,
    lastName,
    email,
  });
  // console.log('success', user.toJSON());
  const validationErrors = validationResult(req)
  // console.log(validationErrors)
  if (validationErrors.isEmpty()) {
    const hash = await bcrypt.hash(password, 10)
    user.password = hash
    await user.save()
    loginUser(req, res, user)
    res.redirect('/')
  } else {
    const errors = validationErrors.array().map((error) => error.msg)
    // console.log(errors)
    res.render("register", {
      title: "Register",
      user,
      errors,
      token: req.csrfToken(),
    })

  }

}));

router.get('/confirm-delete', requireAuth, (req, res) => {
  res.render('confirmDeleteForm')
})
router.get('/upgrade', asyncHandler (async(req, res)=>{
  res.render('upgrade')

}))



router.post('/:id(\\d+)/destroy', asyncHandler(async (req, res) => {
  // console.log('this is testing destroyyyyyy')
  const user = await User.findByPk(res.locals.user.id)
  let errors = [];
  const { password } = req.body
  const isPassword = await bcrypt.compare(password, user.password.toString())
  if (isPassword) {
    await logoutUser(req, res)
    await user.destroy()
    res.redirect('/')
  } else {
    errors.push('Incorrect password')
    res.render('confirmDeleteForm', {errors})
  }

}))


// FOLLOWING AND UNFOLLOWING A SPECIFIC USER
router.post("/:id(\\d+)/follow", asyncHandler(async (req, res) => {

  const isFollowingId = req.params.id
  const userId = res.locals.user.id
  let follow = await Follow.findOne({ where: { userId, isFollowingId } })
  //you cant follow yourself
  if (parseInt(isFollowingId, 10) === parseInt(userId, 10))
    // res.status(304)
    res.json('same user try later')
  else if (!follow) {
    const newFollow = await Follow.create({
      isFollowingId,
      userId,
    })
    res.json('following')
  } else {
    follow.destroy()
    res.json('unfollowed')
  }
}))


router.get('/demouser', asyncHandler(async(req, res)=>{
  req.session.auth = { userId: 1 };
  res.redirect('/');

}))


module.exports = router;

//LOGIN & SIGNUP ROUTES GO HERE

//delete user route
