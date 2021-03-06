

const now = new Date();

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//   /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//     */

//     return queryInterface.bulkInsert('Users', [
//       {
//         name: 'super-admin',
//         email: 'dharmykoya38@gmail.com',
//         phone_number: '08037145164',
//         address: '12, oluwole street, Lagos.',
//         password: hashPassword('super-admin'),
//         role_id: 1,
//         // restaurant_name: 'super-admin',
// 	      // restaurant_logo: 'chris.png',
//         // type: 1,
//         authorizations: [1],
//         createdAt: Sequelize.literal('NOW()'),
//         updatedAt: Sequelize.literal('NOW()'),
//       },
//       {
//         name: 'Doyin John',
//         email: 'doyin@gmail.com',
//         phone_number: '0801234567',
//         address: '12, ajayi street, Lagos.',
//         password: hashPassword('meal-app'),
//         role_id: 2,
//         // type: 2,
//         // restaurant_name: 'African kitchen',
// 	      // restaurant_logo: 'chris.png',
//         authorizations: [5, 6, 7, 8, 9, 10],
//         createdAt: Sequelize.literal('NOW()'),
//         updatedAt: Sequelize.literal('NOW()'),
//       },
//       {
//         name: 'Isaac Olayi',
//         email: 'isaac@gmail.com',
//         phone_number: '0809876543',
//         address: '12, solanke street, Lagos.',
//         password: hashPassword('meal-app'),
//         role_id: 3,
//         // type: 3,
//         authorizations: [3, 10, 13, 14, 15],
//         createdAt: Sequelize.literal('NOW()'),
//         updatedAt: Sequelize.literal('NOW()'),
//       },
//     ], {});
//   },

//   down: (queryInterface) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkDelete('Users', null, {});
//   },
// };


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      name: 'super-admin',
      email: 'dharmykoya38@gmail.com',
      phone_number: '08037145164',
      address: '12, oluwole street, Lagos.',
      password: '$2b$08$hcVrTjGvlJ9jV5S0RIe23.I6eoow8fXT.gA06A3oVIwPDiYXC4GEC',
      role_id: 1,
      // restaurant_name: 'super-admin',
	      // restaurant_logo: 'chris.png',
      // type: 1,
      authorizations: [1],
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Doyin John',
      email: 'doyin@gmail.com',
      phone_number: '0801234567',
      address: '12, ajayi street, Lagos.',
      password: '$2b$08$hcVrTjGvlJ9jV5S0RIe23.I6eoow8fXT.gA06A3oVIwPDiYXC4GEC',
      role_id: 2,
      // type: 2,
      // restaurant_name: 'African kitchen',
	    // restaurant_logo: 'chris.png',
      authorizations: [5, 6, 7, 8, 9, 10],
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Isaac Olayi',
      email: 'isaac@gmail.com',
      phone_number: '0809876543',
      address: '12, solanke street, Lagos.',
      password: '$2b$08$hcVrTjGvlJ9jV5S0RIe23.I6eoow8fXT.gA06A3oVIwPDiYXC4GEC',
      role_id: 3,
      // type: 3,
      authorizations: [3, 10, 13, 14, 15],
      createdAt: now,
      updatedAt: now,
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
