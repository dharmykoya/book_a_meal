/* eslint-disable arrow-body-style */

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Items', [{
      meal_id: 1,
      quantitiy: 1,
      total: 800,
      user_id: 3,
    },
    {
      meal_id: 2,
      quantitiy: 1,
      total: 200,
      user_id: 3,
    },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Items', null, {});
  },
};
