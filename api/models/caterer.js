export default (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: {
        args: false,
        msg: 'Please enter the role',
      },
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
    restaurant_name: {ch
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name',
      },
    },
    restaurant_logo: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name',
      },
    },
  });
  Caterer.associate = (models) => {
    Caterer.hasMany(models.Meal, {
      foreignKey: 'caterer_id',
    });
  };
  Caterer.associate = (models) => {
    Caterer.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };
  return Caterer;
};
