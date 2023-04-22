'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses_modules', {
      id_course: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'courses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },

      id_module: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: 'modules',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses_modules');
  }
};
