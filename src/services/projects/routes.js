// const getController = require('./controllers/get');
const postController = require('./controllers/post');

exports.registerRoutes =(router)=> {
  router
    .route('/projects')
    .post(postController)

  // router
  //   .route('/projects/:id')
  //   .get(getController)
};