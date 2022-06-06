import express from 'express';
import helmet from 'helmet';

import loadingRoutes from './services/loading-routes.js';
import mongodb from './database/database.js';

const PORT = process.env.PORT || 5000;


const app = express();
app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});
app.use(express.json());

app.use('/',loadingRoutes);

app.use('/',(req, res)=>{res.status(401).send()});

app.listen(PORT, () => {
  mongodb();
  console.log(`Server starterd at port ${PORT}`);
});

export default app;