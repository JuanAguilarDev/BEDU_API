const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');
const Grade = require('./grade');
const Subject = require('./subject');

const User = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    surname: { type: Sequelize.STRING },
    rol: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    groupId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'groups',
            key: 'id'
        },
        onDelete: 'CASCADE' // Allows delete on cascade
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
        }
    },
});

// Validar password
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

User.hasMany(Grade);
User.hasMany(Subject);

module.exports = User;