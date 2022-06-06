import express from 'express';

import getController from './controllers/get.js';
import postController from './controllers/post.js';
import putController from './controllers/put.js';


const router = express.Router();

router
  .route('/business')
  .post(postController)
  .put(putController)
router  
  .route('/business/:id')
  .get(getController)


export default router