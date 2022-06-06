import postController from './controllers/post.js';
// import deleteController from './controllers/delete.js';


const register = (router)=> {
  router
    .route('/tokens')
    .post(postController)
    // .delete(deleteController)

};




export default register