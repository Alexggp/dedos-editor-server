const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
  passReqToCallback: true
}), (req, res) => {
  const user = {
    _id: req.user._id,
    email: req.user.email,
    name: req.user.name
  }
  res.send(user);
});

router.post('/signin', passport.authenticate('local-signin', {
  passReqToCallback: true
}), (req, res) => {
  const user = {
    _id: req.user._id,
    email: req.user.email,
    name: req.user.name
  }
  res.send(user);
});
// router.get('/login/facebook', passport.authenticate('facebok-login'));
// router.get('/auth/facebook/callback', passport.authenticate('facebok-login', {
//   successRedirect: '/projects',
//   failureRedirect: '/user/signin',
// }));

router.get('/logout', (req, res) => {
  req.logout();
  res.send();
});

//router.use(isAuthenticated);

// router.get('/projects', isAuthenticated, (req, res) => {
//   res.render('projects.ejs');
// });


// function isAuthenticated(req, res ,next) {
//   if (req.isAuthenticated()){
//     return next();
//   }else{
//     res.redirect('/');
//   }
// };


module.exports = router;