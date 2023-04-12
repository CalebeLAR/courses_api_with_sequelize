'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        name: 'FullStack',
        description: 'Formação de Desenvolvedores FullStack Junior',
        creation_date: '2019-06-01T00:00:00', 
        active: true,
        duration: 12,
      },
      {
        name: 'Mobile',
        description: 'Formação de Desenvolvedores Mobile Junior',
        creation_date: '2022-01-01T00:00:00', 
        active: true,
        duration: 12
      },
      {
        name: 'Back-end',
        description: 'Formação de Desenvolvedores Back-end Junior',
        creation_date: '2023-01-01T00:00:00', 
        active: false,
        duration: 6
      },
      {
        name: 'Front-end',
        description: 'Formação de Desenvolvedores Front-end Junior',
        creation_date: '2022-06-01T00:00:00', 
        active: true,
        duration: 6
      }
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
