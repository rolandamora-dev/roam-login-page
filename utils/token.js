const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');

const jwtToken = () => {
  const id = uuid();
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
}

module.exports = jwtToken;