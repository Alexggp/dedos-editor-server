import getController from './controllers/get.js';
import postController from './controllers/post.js';


const register = (router)=> {
  router
    .route('/projects')
    .post(postController)

  router
    .route('/projects/:id')
    .get(getController)
};




export default register