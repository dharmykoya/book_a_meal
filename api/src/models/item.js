export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    meal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'Meals',
      //   key: 'id',
      //   as: 'meal_id',
      // },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

  Item.associate = (models) => {
    Item.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };
  Item.associate = (models) => {
    Item.belongsTo(models.Meal, {
      foreignKey: 'meal_id',
      as: 'meal',
    });
  };
  return Item;
};