import postController from './controllers/post.js';

const register = (router)=> {
  router
    .route('/areas')
    .post(postController)

};




export default register