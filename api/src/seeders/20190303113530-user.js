const hashPassword = require('../services/helper');
// import hashPassword from '../services/helper';
// const date = new Date();
module.exports = {
  up: (queryInterface) => {
  /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Users', [
      {
        name: 'Damilola Adekoya',
        email: 'dharmykoya38@gmail.com',
        phone_number: '08037145164',
        address: '12, oluwole street, Lagos.',
        password: hashPassword('meal-app'),
        role_id: 1,
        authorizations: [1, 2, 3, 4, 5, 6],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Doyin John',
        email: 'doyin@gmail.com',
        phone_number: '0801234567',
        address: '12, ajayi street, Lagos.',
        password: hashPassword('meal-app'),
        role_id: 2,
        authorizations: [2, 3, 4, 5, 6],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Isaac Olayi',
        email: 'isaac@gmail.com',
        phone_number: '0809876543',
        address: '12, solanke street, Lagos.',
        password: hashPassword('meal-app'),
        role_id: 3,
        authorizations: [5, 6],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Users', null, {});
  },
};
