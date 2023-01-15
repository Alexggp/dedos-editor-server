const getController = require('./controllers/get');

exports.registerRoutes =(router)=> {
  router
    .route('/download/:proyectId')
    .get(getController)
};