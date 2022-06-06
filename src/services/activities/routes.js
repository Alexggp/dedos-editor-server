import postController from './controllers/post.js';


const register = (router)=> {
  router
    .route('/activities')
    .post(postController)
};




export default register