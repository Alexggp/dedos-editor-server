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

  try{
    const user = await User.findOne({email:email});

    if (user){
      return done(null, false, { status:409, message: 'User already exists' })
    }
  
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.name = req.body.name;
    await newUser.save();
    done(null, newUser);

  } catch (e){
    return done(e);
  }
 
}));


passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done)=>{

  try{
    const user = await User.findOne({email:email});

    if(!user){
      return done(null, false, { status:401, message: 'Incorrect user or password' })
    }
    if(!user.comparePassword(password, user.password)){
      return done(null, false, { status:401, message: 'Incorrect user or password' })
    }
    done(null, user);
  } catch (e) {
    return done(e);
  }

}));