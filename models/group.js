const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const Subject = require('./subject');

const Group = sequelize.define('groups', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    hooks: {
        beforeCreate: function (review, options) {
            review.createdAt = new Date();
            review.updatedAt = new Date();
        },
        beforeUpdate: function (review, options) {
            review.updatedAt = new Date();
        },
    },
});


module.exports = Group;