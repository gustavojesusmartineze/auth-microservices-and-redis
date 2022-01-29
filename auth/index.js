const jwt = require('jsonwebtoken');

const config = require('../config');

function sign(data) {
  return jwt.sign(data, config.security.secret);
}

function verify(token) {
  try {
    return jwt.verify(token, config.security.secret);
  } catch (error) {
    throw new Error(error.message)
  }
}

const check = {
  own: function(req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded);

    if (decoded.id !== owner) {
      throw new Error('Forbidden');
    }
  },
}

function getToken(auth) {
  // Bearer saqwasdasuasudiasduasdasd
  if (!auth) {
    throw new Error('Token is missing');
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw new Error('Invalid Format')
  }

  const token = auth.replace('Bearer ', '');

  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

module.exports = {
  sign,
  check
};
