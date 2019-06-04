

const now = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Caterers', [
    {
      user_id: 2,
      restaurant_name: 'mr bigs',
	    restaurant_logo: 'chris.png',
      createdAt: now,
      updatedAt: now,
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Caterers', null, {}),
};
