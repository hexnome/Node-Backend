// #config development
const mode = 'development'; // development, production
const project = 'nodetomic-api';

import path from 'path';

export default {
  mode : mode, // Mode
  root : path.normalize(`${__dirname}/../../`), // Path Root
  base : path.normalize(`${__dirname}/..`), // Path Base
  client : 'client', // Folder Client
  server : { // Server listen
    ip: 'localhost',
    port: 8000
  },
  secret : `s3kr3t_$k3y_&5ess10n?%-${project}-${mode}`, // Secret key
  session : 'defaultStore', // defaultStore, mongoStore, redisStore / [Required for Twitter oAuth or sessions local...]
  // Roles
  roles : [
    {
      rol: 'user',
      time: 120 // 120 minutes
    }, {
      rol: 'admin',
      time: 1440 // 24 hours
    }
  ],
  router : {
    ignore: ['example'] //Ignore Routers in /api/example
  },
  path : { // paths 404
    disabled: '/:url(api|assets|lib|bower_components)/*'
  },
  database : { // DataBase
    mongo: { // MongoDb
      db: {
        uri: `mongodb://localhost:27017/${project}-${mode}`, // [format-> mongodb://username:password@host:port/database?options]
        options: {
          useMongoClient: false
        },
        seeds: [
          {
            model: 'User',
            path: '/api/v1/user/user.seed',
            seed: 'alway' //once - alway - never
          }, {
            model: 'Hello',
            path: '/api/v2/hello/hello.seed',
            seed: 'alway'
          }
        ]
      }
    }
    // Other DataBase
  },
  email : { // Email Config
    host: 'hostexample',
    secure: true,
    port: 465,
    auth: {
      user: 'example@gmail.com',
      pass: 'examplePassword'
    }
  },
  swagger : { // Swagger Config
    enabled: true,
    title: `${project}`,
    description: `RESTful API ${project}`,
    "contact": {
      "name": "Developer",
      "url": "http://www.example.com",
      "email": "example@example.com"
    },
    "license": {
      "name": "MIT",
      "url": "https://github.com/kevoj/nodetomic-api/blob/master/LICENSE"
    }
  },
  redis : { // Redis
    token: {
      uri: 'redis://127.0.0.1:6379/0', // [format-> redis://user:password@host:port/db-number?db=db-number&password=bar&option=value]
      time: 1440, // by default 1440 minutes = 24 hours,
      multiple: false // if you want multiples logins or only one device in same time
    }
  },
  oAuth : { // oAuth
    facebook: {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/facebook/callback'
    },
    twitter: {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/twitter/callback'
    },
    google: {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/google/callback'
    },
    github: {
      clientID: '52be92c9a41f77a959eb',
      clientSecret: '76c9bb03c689d098506822fa80dba372a1fe29c8',
      callbackURL: '/auth/github/callback'
    },
    bitbucket: {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/bitbucket/callback'
    }
  },
  // DEV
  livereload : { // livereload
    enabled: false,
    ip: 'localhost',
    port: 35729
  },
  log : true // Log request in console?
};
