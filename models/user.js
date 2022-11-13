const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');
const Grade = require('./grade');

const User = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    surname: { type: Sequelize.STRING },
    rol: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
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

module.exports = User;