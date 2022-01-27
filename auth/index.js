const jwt = require('jsonwebtoken');

function sign(data) {
  return jwt.sign(data, 'my-secret-example-gustavo');
}

module.exports = {
  sign,
};
