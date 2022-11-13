const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const Group = require('./group')

const Subject = sequelize.define('grades', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    groupId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'groups',
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
    name: { type: Sequelize.STRING, allowNull: false },
    credits: { type: Sequelize.DOUBLE, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    hooks: {
        beforeCreate: function (subject, options) {
            subject.createdAt = new Date();
            subject.updatedAt = new Date();
        },
        beforeUpdate: function (subject, options) {
            subject.updatedAt = new Date();
        },
    },
});

Subject.belongsTo(Group);

module.exports = Subject;