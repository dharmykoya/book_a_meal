export default (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
        as: 'user_id',
      },
      validate: {
        isInt: {
          args: true,
          msg: 'Please enter a valid number',
        },
      },
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter restaurant name',
      },
    },
    restaurant_logo: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name',
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });
  Caterer.associate = (models) => {
    Caterer.hasMany(models.Meal, {
      foreignKey: 'caterer_id',
      as: 'meals',
    });
    Caterer.hasMany(models.Menu, {
      foreignKey: 'caterer_id',
      as: 'menus',
    });
    Caterer.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    Caterer.hasMany(models.Order, {
      foreignKey: 'caterer_id',
      as: 'orders',
    });
  };
  return Caterer;
};
