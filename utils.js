
const csurf = require('csurf');
const asyncHandler = (handler)=>(req, res, next)=>handler(req, res, next).catch(next)
const bcrypt = require('bcryptjs')
const csrfProtection = csurf({cookie:true});




module.exports = {asyncHandler, csrfProtection}
