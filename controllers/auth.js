// const db = require('../models');
const bcrypt = require('bcrypt');
// const { register } = require('../repository/user');
// const ErrorResponse = require('../utils/errorResponse');

// @desc      LOgin user
// @route     POST /user
// @access    Public
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // if (!email || !password) {
  //   return next(new ErrorResponse('Please provide an email and password', 400));
  // }
}

// @desc      Register new user
// @route     POST /user
// @access    Public
exports.register = async (req, res, next) => {

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // encrypt password using bcrypt
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  // if (!req.body.email.match(emailRegex)) {
  //   return new Error('Email is not valid');
  // }

  // call register to add in DB
  register(req, res, next);

}

// @desc      Login
// @route     POST /user
// @access    Public
exports.login = async (req, res, next) => {
  // const { firstName, lastName, address, postCode, phoneNumber, email, username, password } = req.body;
  // db.User.create({
  //   firstName,
  //   lastName,

  // }).then(user => {
  //   res.status(200).json({
  //     success: true,
  //     data: user
  //   });
  // });

}