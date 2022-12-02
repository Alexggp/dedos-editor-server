const express = require('express');
const helmet = require('helmet');
const passport = require('passport')
const morgan = require('morgan');
const session = require('express-session');

const loadingRoutes = require('./src/services/loading-routes');
const loginRountes = require('./src/services/login/login-routes')
const mongodb = require('./src/database/database');
require('./src/passport/local-auth');
require('./src/passport/facebook-auth');

const PORT = process.env.PORT || 5000;


const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, content-type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});
app.use(express.json());
app.use(session({
  secret: 'mysecretsession',
  resave: false, 
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/user',loginRountes);
app.use('/',loadingRoutes.register());

app.use('/',(req, res)=>{res.status(401).send()});

app.listen(PORT, () => {
  mongodb();
  console.log(`Server starterd at port ${PORT}`);
});