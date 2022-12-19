const postController = require('./controllers/post');
const deleteController = require('./controllers/delete');
const putController = require('./controllers/put');

exports.registerRoutes =(router)=> {
  router
    .route('/objetives')
    .post(postController)

  router
    .route('/objetives/:id') 
    .put(putController)
    .delete(deleteController)
};