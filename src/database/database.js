import mongoose from 'mongoose';
import  config  from '../../config.js';

const mongodb = config.mongodb;
const connect = ()=>{
  mongoose.connect(mongodb.URI, { useNewUrlParser: true })
    .then(db => console.log('database is connected!'))
    .catch(err => console.error(err));

}

  export default connect;