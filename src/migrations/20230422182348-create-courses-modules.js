'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses_modules', {
      id_course: {
        allowNull: false,
        type: Sequelize.STRING,
        reference: {
          model: 'courses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },

      id_module: {
        allowNull: false,
        type: Sequelize.STRING,
        reference: {
          model: 'modules',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses_modules');
  }
};
