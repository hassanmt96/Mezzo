const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = { userId: user.id };
  // console.log(req.session.auth)
	// update routes/user module
	// post method /user/login
};

const logoutUser = (req, res) => {
	delete req.session.auth;
	res.locals.authenticated = false;
	 res.locals.user = null;
};

const requireAuth = (req, res, next) => {
	if (!res.locals.authenticated) {
		return res.redirect("/users/login");
	}
	return next();
};
const restoreUser = async (req, res, next) => {
	if (req.session.auth) {
		const { userId } = req.session.auth;
		try {
			const user = await db.User.findByPk(userId);
			if (user) {
				res.locals.authenticated = true;
				res.locals.user = user;
				next();
			}
		} catch (e) {
			res.locals.authenticated = false;
			next(e);
		}
	} else {
    res.locals.authenticated = false;
    next();
  }
};
module.exports = {
	loginUser,
	logoutUser,
	requireAuth,
	restoreUser,
};
