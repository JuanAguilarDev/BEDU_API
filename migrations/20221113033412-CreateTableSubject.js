'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subjects', {
      GroupId: {
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
      updatedAt: Sequelize.DATE,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subjects');
  }
};
