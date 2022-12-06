const getByIdController = require('./controllers/getById');
const postController = require('./controllers/post');
const putController = require('./controllers/put');
const deleteController = require('./controllers/delete');
const getController = require('./controllers/get');

exports.registerRoutes =(router)=> {
  router
    .route('/projects')
    .get(getController)
    .post(postController)

  router
    .route('/projects/:id')
    .get(getByIdController)
    .put(putController)
    .delete(deleteController)
};