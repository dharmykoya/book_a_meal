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
        authorizations: [1, 2, 3, 4, 5, 6],
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'caterer',
        description: 'The role for the caterer with some admin actions',
        authorizations: [2, 3, 4, 5, 6],
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'user',
        description: 'The role for user only',
        authorizations: [5, 6],
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
