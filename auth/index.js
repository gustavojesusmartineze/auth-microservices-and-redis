const jwt = require('jsonwebtoken');

const config = require('../config');

function sign(data) {
  return jwt.sign(data, config.security.secret);
}

module.exports = {
  sign,
};
