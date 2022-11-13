const { Sequelize } = require('sequelize');
require('dotenv').config();

const grade = require('../models/grade');
const group = require('../models/group');
const subject = require('../models/subject');
const user = require('../models/user');

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