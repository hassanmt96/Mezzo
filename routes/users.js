const express = require('express');
const { check } = require('express-validator');
const { User } = require('../db/models')
const { asyncHandler } = require('../utils')
const { loginUser } = require('../auth')
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

router.get('/login', asyncHandler(async (req, res, next) => {
  res.render('testlogin')
  // res.send('this is a test message!')
}));


router.post(
	"/login",
	asyncHandler(async (req, res, next) => {
		const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    loginUser(req, res, user)

		res.render("testlogin", { user });
	})
);


module.exports = router;


//LOGIN & SIGNUP ROUTES GO HERE

//delete user route
