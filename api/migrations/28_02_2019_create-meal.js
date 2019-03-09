module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Meals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    caterer_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Caterers',
        key: 'id',
        as: 'caterer_id',
      },
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Meals'),
};
