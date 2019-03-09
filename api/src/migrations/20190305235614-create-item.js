module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Items', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    meal_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'Meals',
      //   key: 'id',
      //   as: 'meal_id',
      // },
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'user_id',
      },
    },
    deleted: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
  }),
  down: queryInterface => queryInterface.dropTable('Items'),
};
