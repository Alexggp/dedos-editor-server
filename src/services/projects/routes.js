// const getController = require('./controllers/get');
const postController = require('./controllers/post');
const putController = require('./controllers/put');
const deleteController = require('./controllers/delete');


exports.registerRoutes =(router)=> {
  router
    .route('/projects')
    .post(postController)

  router
    .route('/projects/:id')
    // .get(getController)
    .put(putController)
    .delete(deleteController)
};