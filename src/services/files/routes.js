const postController = require('./controllers/post');
// const deleteController = require('./controllers/delete');

exports.registerRoutes =(router)=> {
  router
    .route('/files')
    .post(postController)

  // router
  //   .route('/objetives/:fileName') 
  //   .delete(deleteController)
};