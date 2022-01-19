const jwtToken = require('../utils/token');
const ErrorResponse = require('../utils/errorResponse')

// @desc      Login user
// @route     POST /user
// @access    Public
exports.login = async (req, res, next) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return next(new ErrorResponse('Invalid credentials', 400));
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
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
}