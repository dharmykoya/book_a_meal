/* eslint-disable arrow-body-style */

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Orders', [{
      order: [1, 2],
      total: 1000,
      delivery_status: 0,
      caterer_id: 1,
      user_id: 3,
      createdAt: Date.todayDate(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
