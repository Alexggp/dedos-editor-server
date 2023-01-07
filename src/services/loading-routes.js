/* list of all routes */
const router = require('express').Router();

const activitiesRoute = require ('./activities/routes.js');
const areasRoute = require ('./areas/routes.js');
const tokensRoute = require ('./tokens/routes.js');
const projectsRoute = require ('./projects/routes');
const objetivesRoute = require ('./objetives/routes');
const filesRoute = require ('./files/routes.js');



function register() {
  activitiesRoute.registerRoutes(router);
  areasRoute.registerRoutes(router);
  tokensRoute.registerRoutes(router);
  projectsRoute.registerRoutes(router);
  objetivesRoute.registerRoutes(router);
  filesRoute.registerRoutes(router);

  return router;
}
module.exports.register = register;
