export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    meal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Meal',
        key: 'id',
        as: 'meal_id',
      },
      validate: {
        isInt: {
          args: true,
          msg: 'Please enter a valid number',
        },
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });
  Menu.associate = (models) => {
    Menu.hasMany(models.Meal, {
      foreignKey: 'meal_id',
      as: 'Menus',
    });
  };
  return Menu;
};
