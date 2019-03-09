export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: {
        args: false,
        msg: 'Please enter meal name',
      },
    },
    caterer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Caterer',
        key: 'id',
        as: 'caterer_id',
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
    Meal.belongsTo(models.Caterer, {
      foreignKey: 'caterer_id',
    });
  };
  return Meal;
};
