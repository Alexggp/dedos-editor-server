const postController = require('./controllers/post');
const putController = require('./controllers/put');
const deleteControllor = require('./controllers/delete');

exports.registerRoutes =(router)=> {
  router
    .route('/areas')
    .post(postController)
  router
    .route('/areas/:id')
    .put(putController)
    .delete(deleteControllor)
};