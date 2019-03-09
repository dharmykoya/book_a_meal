/* eslint-disable arrow-body-style */
const now = new Date();

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Meals', [{  
      caterer_id: 1,
      name: 'Rice and beans with two beefs',
      image: 'rice.png',
      price: 800,
      createdAt: now,
      updatedAt: now,
    },
    {
      caterer_id: 1,
      name: 'bread and beans',
      image: 'beans.png',
      price: 200,
      createdAt: now,
      updatedAt: now,
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Meals', null, {});
  },
};
