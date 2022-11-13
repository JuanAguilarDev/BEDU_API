'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grades', {
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      SubjectId: {
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
      updatedAt: Sequelize.DATE,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('grades');
  }
};
