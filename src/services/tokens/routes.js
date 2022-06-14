const postController = require('./controllers/post');
const putController = require('./controllers/put');
const deleteController = require('./controllers/delete');


exports.registerRoutes =(router)=> {
  router
    .route('/tokens')
    .post(postController)
  router
    .route('/tokens/:id')
    .put(putController)
    .delete(deleteController)
};