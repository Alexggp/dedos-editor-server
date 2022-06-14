const postController = require('./controllers/post');
const deleteController = require('./controllers/delete');

exports.registerRoutes =(router)=> {
  router
    .route('/activities')
    .post(postController)

  router
    .route('/activities/:id') 
    .delete(deleteController)

};