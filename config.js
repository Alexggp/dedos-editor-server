const config = {
  version: 3,
  mongodb: {
    URI: 'mongodb://localhost:27017/Dedos'
  },
  authorization:{
    secret: 'URJCisTheBest',
    expiration: '24h'
  }
}

module.exports =  config;