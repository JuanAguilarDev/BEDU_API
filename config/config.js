require('dotenv').config();

const defaultConfig = {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: process.env.DIALECT  
}

module.exports = {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {

  }),
};