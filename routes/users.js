const express = require('express');
const { check } = require('express-validator');
const { User } = require('../db/models')
const { asyncHandler, csrfProtection } = require('../utils')
const { loginUser, logoutUser } = require('../auth')
const router = express.Router();
const bcrypt = require("bcryptjs");

const isPassword = async(password, hash) => await bcrypt.compare(password, hash);

/* GET users listing. */
router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});


//getting user by id
router.get('/:id(\\d+)', asyncHandler(async(req, res, next)=> {
  const user = await User.findByPk(req.params.id)
  res.render(req.user);
}));

router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('testlogin', {token:req.csrfToken()})
  // res.send('this is a test message!')
}));


router.post(
	"/login", csrfProtection,
	asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;
    console.log("===============", password)

    const user = await User.findOne({ where: { email } });

    // console.log(user.password)
    let hash = user.password
    // await isPassword(password, hash )
    console.log("db pass", user.password)
    console.log("is password?", isPassword)
    if (isPassword(password, hash)) {
      loginUser(req, res, user)
      res.render("testlogin", { user });

    } else {
      res.render('error')
    }

	})
);

router.post(
  "/logout",
  asyncHandler(async(req, res, next)=>{
    await logoutUser(req, res)
    res.redirect("/")
  })
)

router.get('/register', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('testregister', {token: req.csrfToken()})
}))

router.post('/register', csrfProtection, asyncHandler(async (req, res, next) => {
  const {firstName, lastName, email, password} = req.body
  let hash = await bcrypt.hash(password, 10)

  await User.create({
    firstName,
    lastName,
    email,
    password: hash,

  })

  res.redirect('/')
}))

module.exports = router;


//LOGIN & SIGNUP ROUTES GO HERE

//delete user route
