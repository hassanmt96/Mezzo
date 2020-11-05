const csurf = require("csurf");
const bcrypt = require("bcryptjs");
const csrfProtection = csurf({ cookie: true });
const saltRounds = 10;

const hashPassword = async (password) => {
	await bcrypt.hash(password, saltRounds);
};

// const isPassword = async (password, hash) => {
// 	await bcrypt.compare(password, hash);
// };


const { check, validationResult } = require('express-validator');
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);

      const err = Error("Bad request.");
      err.errors = errors;
      err.status = 400;
      err.title = "Bad request.";
      return next(err);
    }
    next();
};

module.exports = { asyncHandler, csrfProtection, hashPassword, handleValidationErrors };
