const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../database/models/users');

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done)=>{

  const user = await User.findOne({email:email});

  if(user){
    return done({status: 409})
  }

  const newUser = new User();
  newUser.email = email;
  newUser.password = newUser.encryptPassword(password);
  newUser.name = req.body.name;
  await newUser.save();
  done(null, newUser);
}));


passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done)=>{

  const user = await User.findOne({email:email});

  if(!user){
    return done({status: 404});
  }
  if(!user.comparePassword(password, user.password)){
    return done({status: 401});
  }
  done(null, user);
}));