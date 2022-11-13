const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        logging: false
    }
)

module.exports = sequelize;