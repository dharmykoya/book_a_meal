const date = new Date();

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'super_admin',
        description: 'The role can do every action in the system',
        authorizations: [1],
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'caterer',
        description: 'The role for the caterer with some admin actions',
        authorizations: [5, 6, 7, 8, 9],
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'user',
        description: 'The role for user only',
        authorizations: [3, 10, 13, 14, 15],
        createdAt: date,
        updatedAt: date,
      },
    ], {});
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
