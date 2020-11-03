const csurf = require("csurf");
const bcrypt = require("bcryptjs");
const csrfProtection = csurf({ cookie: true });
const saltRounds = 10;

const asyncHandler = (handler) => (req, res, next) =>
	handler(req, res, next).catch(next);

const hashPassword = async (password) => {
	await bcrypt.hash(password, saltRounds);
};

const isPassword = async (password, hash) => {
	await bcrypt.compare(password, hash);
};

module.exports = { asyncHandler, csrfProtection, hashPassword, isPassword };
