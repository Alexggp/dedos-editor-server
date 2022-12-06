const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const loadingRoutes = require('./src/services/loading-routes');
const loginRountes = require('./src/services/login/login-routes')
const mongodb = require('./src/database/database');
const jwtAuthentication = require('./src/middleware/jwtAuthentication');
require('./src/passport/local-auth');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(helmet());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Headers', 'Origin, content-type, Access-Control-Allow-Request-Method, Authorization, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});
app.options('/*', (_, res) => {
  res.sendStatus(200);
});

app.use(express.json());

app.use('/user',loginRountes);
app.use('/', jwtAuthentication, loadingRoutes.register());

app.use('/',(req, res)=>{res.status(401).send()});

app.listen(PORT, () => {
  mongodb();
  console.log(`Server starterd at port ${PORT}`);
});