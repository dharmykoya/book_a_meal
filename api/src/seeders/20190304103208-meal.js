/* eslint-disable arrow-body-style */
const now = new Date();


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Meals', [
    {  
      caterer_id: 1,
      name: 'Rice and beans with two beefs',
      image: 'rice.png',
      price: 800,
      createdAt: now,
      updatedAt: now,
    },
    {  
      caterer_id: 1,
      name: 'Amala and ewedu',
      image: 'rice.png',
      price: 500,
      createdAt: now,
      updatedAt: now,
    },
    {  
      caterer_id: 1,
      name: 'moi moi and veg',
      image: 'rice.png',
      price: 600,
      createdAt: now,
      updatedAt: now,
    },
    {
      caterer_id: 1,
      name: 'bread and beans',
      image: 'beans.png',
      price: 400,
      createdAt: now,
      updatedAt: now,
    }
  ]),

  down: queryInterface => queryInterface.bulkDelete('Caterers', null, {}),
};

