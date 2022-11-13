const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const Subject = require('./subject');
const User = require('./user')

const Grade = sequelize.define('grades', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    subjectId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'subjects',
            key: 'id'
        },
        onDelete: 'CASCADE' // Allows delete on cascade
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE' // Allows delete on cascade
    },
    mark: { type: Sequelize.DOUBLE, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    hooks: {
        beforeCreate: function (grade, options) {
            grade.createdAt = new Date();
            grade.updatedAt = new Date();
        },
        beforeUpdate: function (grade, options) {
            grade.updatedAt = new Date();
        },
    },
});


module.exports = Grade;