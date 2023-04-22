'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('modules', [
      {
        name: 'Fundamentos',
        description: 'Bases da programação',
        duration: 2,
        qtblock: 8
      },
      {
        name: 'FrontEnd',
        description: 'Introdução a HTML',
        duration: 6,
        qtblock: 12
      },
      {
        name: 'BackEnd',
        description: 'Introdução a Banco de Dados',
        duration: 8,
        qtblock: 14
      },
      {
        name: 'Android',
        description: 'Introdução à aplicativos',
        duration: 6,
        qtblock: 8
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modules', null, {});

  }
};
