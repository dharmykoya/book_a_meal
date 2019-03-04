module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Menus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    meal_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Meals',
        key: 'id',
        as: 'meal_id',
      },
    },
    deleted: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
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
  down: queryInterface => queryInterface.dropTable('Menus'),
};
