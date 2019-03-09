export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter meal name',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'user_id',
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the size of the meal',
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter the meal price',
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please upload an Image',
      },
    },
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };
  return Meal;
};
