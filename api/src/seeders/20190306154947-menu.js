/* eslint-disable arrow-body-style */
import Date from '../services/menu.service';

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Menus', [{
      caterer_id: 1,
      meals: [1, 2],
      createdAt: Date.todayDate(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Menus', null, {});
  },
};
