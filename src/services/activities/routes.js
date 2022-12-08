const postController = require('./controllers/post');
const deleteController = require('./controllers/delete');
const putController = require('./controllers/put');

exports.registerRoutes =(router)=> {
  router
    .route('/activities')
    .post(postController)

  router
    .route('/activities/:id') 
    .put(putController)
    .delete(deleteController)
};