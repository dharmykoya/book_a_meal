export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role name',
      },
    },
  });
  Role.associate = (models) => {
    Role.hasMany(models.User, {
      foreignKey: 'user_id',
    });
    return Role;
  };
};
