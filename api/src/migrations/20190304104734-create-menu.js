module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Menus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    caterer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Caterers',
        key: 'id',
        as: 'caterer_id',
      },
    },
    meals: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false,
    },
    deleted: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATEONLY,
      dateStrings: true,
      typeCast: true,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATEONLY,
      dateStrings: true,
      typeCast: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Menus'),
};
