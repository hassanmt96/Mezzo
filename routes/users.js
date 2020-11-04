const express = require("express");
const { check } = require("express-validator");
const { User } = require("../db/models");
const { asyncHandler, csrfProtection, handleValidationErrors } = require("./utils");
const { loginUser, logoutUser } = require("../auth");
const router = express.Router();
const bcrypt = require("bcryptjs");

const isPassword = async (password, hash) =>
	await bcrypt.compare(password, hash);
const db = require('../db/models');


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

/* GET register form. */
router.get('/register', (req, res, next) => {
  res.render('register');
});

// router.post('/register', userValidator, handleValidationErrors, (req, res, next) => {

//   const {
//     firstName,
//     lastName,
//     email,
//     password,
//   } = req.body;

//   const user = db.User.build({
//     firstName,
//     lastName,
//     email,
//     password,
//   });
//   res.render('register', user);
// });

router.post('/register', userValidator,
  asyncHandler(async (req, res, next) => {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // TODO Attempt to login the user.
      const user = await db.User.findOne({ where: { email }});

      if(user !== null){
          //const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

          //if(passwordMatch){
              //loginUser(req, res, user);
              return res.redirect('/');
         // }
      }

      errors.push(`Login failed for the provided email address and password`);
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('register', {
      title: 'Register',
      firstName,
      lastName,
      email,
      errors,
    });
  }));

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', loginValidator, handleValidationErrors, (req, res, next) => {
  res.render('login');
});


/* GET users listing. */
router.get("/", (req, res, next) => {
	res.send("respond with a resource");
});

router.get("/logged-in", (req, res, next) => {
  res.render('loggedInLayout')
})

//getting user by id
// router.get(
// 	"/:id(\\d+)",
// 	asyncHandler(async (req, res, next) => {
// 		const user = await User.findByPk(req.params.id);
// 		res.render(req.user);
// 	})
// );

// router.get(
// 	"/login",
// 	csrfProtection,
// 	asyncHandler(async (req, res, next) => {
// 		res.render("testlogin", { token: req.csrfToken() });
// 	})
// );

// router.post(
// 	"/login",
// 	csrfProtection,
// 	asyncHandler(async (req, res, next) => {
// 		const { email, password } = req.body;
// 		const user = await User.findOne({ where: { email } });
// 		let hash = user.password;
// 		if (isPassword(password, hash)) {
// 			loginUser(req, res, user);
// 			res.render("testlogin", { user });
// 		} else {
// 			res.render("error");
// 		}
// 	})
// );

// router.post(
// 	"/logout",
// 	asyncHandler(async (req, res, next) => {
// 		await logoutUser(req, res);
// 		res.redirect("/");
// 	})
// );

// router.get(
// 	"/register",
// 	csrfProtection,
// 	asyncHandler(async (req, res, next) => {
// 		res.render("testregister", { token: req.csrfToken() });
// 	})
// );

// router.post(
// 	"/register",
// 	csrfProtection,
// 	asyncHandler(async (req, res, next) => {
// 		const { firstName, lastName, email, password } = req.body;
// 		let hash = await bcrypt.hash(password, 10);

// 		await User.create({
// 			firstName,
// 			lastName,
// 			email,
// 			password: hash,
// 		});

// 		res.redirect("/");
// 	})
// );

module.exports = router;

//LOGIN & SIGNUP ROUTES GO HERE

//delete user route
