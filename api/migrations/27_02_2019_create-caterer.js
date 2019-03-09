module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Caterers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      references: {
        model: 'Users',
        key: 'id',
        as: 'user_id',
      },
    },
    restaurant_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    restaurant_logo: {
      type: Sequelize.STRING,
      allowNull: true,
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
  down: queryInterface => queryInterface.dropTable('Caterers'),
};
