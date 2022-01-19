const bcrypt = require('bcrypt');
const ErrorResponse = require('../utils/errorResponse');
const jwtToken = require('../utils/token');

exports.encrypt = async (req, res, next) => {
  // encrypt password using bcrypt
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  next();
}

exports.protect = async (req, res, next) => {
  let token;

  console.log('authorization', req.headers.authorization);

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  next();
}