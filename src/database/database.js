const mongoose = require('mongoose');
const config = require('../../config');

const mongodb = config.mongodb;
const connect = ()=>{
  mongoose.connect(mongodb.URI, { useNewUrlParser: true })
    .then(db => console.log('database is connected!'))
    .catch(err => console.error(err));

}

module.exports  = connect;