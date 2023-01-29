const config = {
  version: 3,
  mongodb: {
    URI: 'mongodb://127.0.0.1:27017/Dedos'
  },
  authorization:{
    secret: 'URJCisTheBest',
    expiration: '24h'
  }
}

module.exports =  config;