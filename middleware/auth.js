const bcrypt = require('bcrypt');

exports.encrypt = async (req, res, next) => {
  // encrypt password using bcrypt
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  next();
}