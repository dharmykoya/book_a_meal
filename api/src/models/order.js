export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    caterer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Caterers',
        key: 'id',
        as: 'caterers',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'user_id',
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Caterer, {
      foreignKey: 'caterer_id',
      as: 'caterer',
    });
    Order.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };
  return Order;
};

