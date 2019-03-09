export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    caterer_id: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: {
        args: false,
        msg: 'Please enter the role',
      },
      references: {
        model: 'Caterer',
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
    menu_dat: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: 'Please enter the menu',
      },
    },
    menu_data: {
      type: DataTypes.JSONB,
      allowNull: {
        args: false,
        msg: 'Please enter the menu',
      },
    },
  });
  Menu.associate = (models) => {
    Menu.hasMany(models.Caterer, {
      foreignKey: 'caterer_id',
    });
  };
  return Menu;
};
