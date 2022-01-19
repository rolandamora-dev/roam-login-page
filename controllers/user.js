const db = require('../models');

// @desc      List users
// @route     GET /user
// @access    Public
exports.listUsers = async (req, res, next) => {
  db.User.findAll().then(users => {
    res.status(200).json({
      success: true,
      data: users
    });
  });
}

// @desc      List users
// @route     GET/:id /user
// @access    Public
exports.getUser = async (req, res, next) => {

  db.User.findAll({
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.status(200).json({
      success: true,
      data: user
    });
  });
}

// @desc      Add new user
// @route     POST /user
// @access    Public
exports.addUser = async (req, res, next) => {

  try {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      postcode: req.body.postcode,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }).then(posted => {
      res.status(201).json({
        success: true,
        data: posted
      });
    });
  } catch (err) {
    console.log(err);
  }
}

// @desc      Edit a user
// @route     GET /user/:id
// @access    Public
exports.editUser = async (req, res, next) => {
  try {
    db.User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        postcode: req.body.postcode,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      },
      {
        where: { id: req.params.id }
      }
    ).then(user => {
      res.status(200).json({
        success: true,
        data: user
      });
    });
  } catch (err) {
    console.log(err);
  }
}

// @desc      Delete a user
// @route     DELETE /user/:id
// @access    Public
exports.deleteUser = async (req, res, next) => {

  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(users => {
    res.status(200).json({
      success: true,
    });
  });

  console.log(req.params);
}