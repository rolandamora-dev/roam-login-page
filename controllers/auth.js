const jwtToken = require('../utils/token');
const ErrorResponse = require('../utils/errorResponse')
const db = require('../models');
const bcrypt = require('bcrypt');

// @desc      Login user
// @route     POST /user
// @access    Public
exports.login = async (req, res, next) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return next(new ErrorResponse('Invalid credentials', 400));
  }

  if (!hasMatchedPassword(username, password)) {
    return next(new ErrorResponse('Invalid Password', 400));
  }

  if (role !== "admin") {
    return next(new ErrorResponse('Unauthorized user', 400));
  }

  const token = jwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  req.headers.authorization = token;
  res.status(200)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
}

// @desc      Login user
// @route     POST /user
// @access    Public
exports.logout = async (req, res, next) => {

  req.headers.authorization = '';
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
}

const hasMatchedPassword = async (username, enteredPassword) => {
  try {
    const user = await db.User.findOne({
      where: {
        username
      }
    }).then(user => {
      return user.dataValues;
    });

    return await bcrypt.compare(enteredPassword, user.password);
  } catch (err) {
    throw ErrorResponse('Match error', 400);
  }
}