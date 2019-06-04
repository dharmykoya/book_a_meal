module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    order: {
      type: Sequelize.JSONB,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    delivery_status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
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
  down: queryInterface => queryInterface.dropTable('Orders'),
};
