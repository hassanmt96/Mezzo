const express = require('express');
const { check } = require('express-validator');
const csurf = require('csurf');
const { User } = require('../db/models')
const { asyncHandler, csrfProtection } = require('../utils')
const { loginUser, logoutUser } = require('../auth')
const router = express.Router();


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
    const user = await User.findOne({ where: { email } });
    loginUser(req, res, user)

		res.render("testlogin", { user });
	})
);

router.post(
  "/logout",
  asyncHandler(async(req, res, next)=>{
    await logoutUser(req, res)
    res.redirect("/")
  })
)


module.exports = router;


//LOGIN & SIGNUP ROUTES GO HERE

//delete user route
