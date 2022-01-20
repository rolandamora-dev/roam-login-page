const jwtToken = require('../utils/token');
const ErrorResponse = require('../utils/errorResponse')
const db = require('../models');
const bcrypt = require('bcrypt');
const { validate } = require('uuid');

// @desc      Login user
// @route     POST /user
// @access    Public
exports.login = async (req, res, next) => {
  validateLogin(req, res, next)
    .then(validated => {
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
    })
    .catch(err => {
      return next(new ErrorResponse(err, 400));
    })
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

const validateLogin = async (req, res, next) => {
  const { username, password, role } = req.body;

  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject('Invalid credentials');
    }

    if (role !== "admin") {
      reject('Unauthorized user');
    }

    db.User.findOne({
      where: {
        username
      }
    }).then((user) => {
      const isValid = user.validPassword(password);
      if (isValid) {
        resolve('Valid Password');
      } else {
        reject('Invalid Password');
      }
    })
      .catch(err => {
        reject('Invalid Password');
      })
  })
}