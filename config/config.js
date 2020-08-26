require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEVELOPMENT,
    password: process.env.DB_PASSWORD_DEVELOPMENT,
    database: process.env.DB_DATABASE_DEVELOPMENT,
    host: process.env.DB_HOST_DEVELOPMENT,
    port: process.env.DB_PORT_DEVELOPMENT,
    dialect: 'mysql',
    connectionTimeout: 0,
    pool: {
      max: 1,
      min: 1,
      idle: 200000,
      acquire: 200000
    },
    logging: true
  },
  production: {
    username: process.env.DB_USERNAME_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_DATABASE_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    port: process.env.DB_PORT_PRODUCTION,
    dialect: 'mysql',
    connectionTimeout: 0,
    pool: {
      max: 1,
      min: 1,
      idle: 200000,
      acquire: 200000
    }
  }
};
