'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Courses', [{
    name: 'FullStack',
    description: 'Formação de Desenvolvedores FullStack Junior',
    creation_date: '2019-06-01T00:00:00', 
    active: true,
    duration: 12,
  },{
    name: 'Mobile',
    description: 'Formação de Desenvolvedores Mobile Junior',
    creation_date: '2023-02-01T00:00:00', 
    active: true,
    duration: 12
  }], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
