/* list of all routes */
import express from 'express';
import activitiesRoute from './activities/routes.js';
import areasRoute from './areas/routes.js';
import tokensRoute from './tokens/routes.js';
import projectsRoute from './projects/routes.js';

const router = express.Router()

const register = () => {
  activitiesRoute.registerRoutes(router);
  areasRoute.registerRoutes(router);
  tokensRoute.registerRoutes(router);
  projectsRoute.registerRoutes(router);

  return router;
}
export default register;
