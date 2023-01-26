const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { authorization } = require('../../../config');

router.post('/signup', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    try {
      if (err) {
        return next(err); // will generate a 500 error
      }

      if (! user) {
        return res.status(info.status).send(info);
      }

      req.login(user, {
        passReqToCallback: true,
        session: false
      }, async (err) => {
        if (err) return next(err)
        const body = { _id: user._id, email: user.email, name: user.name }
        return res.send(body)
      })
    } 
    catch (e) {
      return next(e)
    }
  })(req, res, next);
});

router.post('/signin', function(req, res, next) {
  passport.authenticate('local-signin', function(err, user, info) {
    try {
      if (err) {
        return next(err); // will generate a 500 error
      }
      // Generate a JSON response reflecting authentication status
      if (! user) {
        return res.status(info.status).send(info);
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return next(err)
        const user_data = { _id: user._id, email: user.email, name: user.name }

        const token = jwt.sign( user_data ,
           authorization.secret, 
           {expiresIn: authorization.expiration}
          )
        return res.send({user_data, token});
      })
    } 
    catch (e) {
      return next(e)
    }
  })(req, res, next);
});

module.exports = router;