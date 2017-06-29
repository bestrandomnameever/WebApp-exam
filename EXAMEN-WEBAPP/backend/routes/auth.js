var mongoose = require('mongoose');
var jwt = require('express-jwt');
var secret = require('../config').secret;
var User = mongoose.model('User');

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
    req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

function isUserIdOfAdmin(id) {
  return User.findById(id).then(user => {
    return user.isAdmin
  });
}

var auth = {
  isAdmin: function (req, res, next) {
    isUserIdOfAdmin(req.payload.id).then(isAdmin => {
      if (isAdmin) {
        return next();
      } else {
        return res.status(401).json({
          errors: {
            general: "Admin privileges required"
          }
        });
      }
    })
  },
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;