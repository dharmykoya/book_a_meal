export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    caterer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Caterer',
        key: 'id',
        as: 'caterer_id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter meal name',
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Please provide meal image',
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter meal price',
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.Caterer, {
      foreignKey: 'caterer_id',
      as: 'Caterer',
    });
  };
  Meal.associate = (models) => {
    Meal.belongsTo(models.Menu, {
      foreignKey: 'menu_id',
      as: 'Menu',
    });
  };
  // User.associate = (models) => {
  //   User.hasMany(models.Order, {
  //     foreignKey: 'user_id',
  //     as: 'Orders',
  //   });
  // };
  return Meal;
};
