'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Elizabet Tompson',
        email: 'Eliza@gmail.com',
        birthDay: '2003-12-01T01:30:00',
        active: true, 
        id_course: 1,
      },
      {
        name: 'João Carvalho',
        birthDay: '1998-06-01T10:30:00',
        email: 'Carvas@gmail.com',
        active: true, 
        id_course: 4,
      },
      {
        name: 'Maria Botelho',
        birthDay: '1996-08-01T10:30:00',
        email: 'Mari@gmail.com',
        active: true, 
        id_course: 2,
      },
      {
        name: 'Paulo Silva',
        birthDay: '1996-01-01T10:30:00',
        email: 'PSilva@gmail.com',
        active: true, 
        id_course: 3,
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});

  }
};
