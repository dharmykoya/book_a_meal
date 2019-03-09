export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    caterer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Caterers',
        key: 'id',
        as: 'caterer_id',
      },
      validate: {
        isInt: {
          args: true,
          msg: 'Please enter a valid number',
        },
      },
    },
    meals: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      allowNull: {
        args: true,
        msg: 'Please enter meals',
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
  Menu.associate = (models) => {
    Menu.belongsTo(models.Caterer, {
      foreignKey: 'caterer_id',
      as: 'menus',
    });
  };
  // Menu.hasMany(Meal, {
  //   foreignKey: 'meal_id',
  //   as: 'Menus',
  // });
  return Menu;
};
