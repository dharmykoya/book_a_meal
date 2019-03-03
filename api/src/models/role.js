export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role name',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role description',
      },
    },
    authorizations: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      allowNull: {
        args: true,
        msg: 'Please enter authorization type',
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  });
  Role.associate = (models) => {
    Role.hasMany(models.User, {
      foreignKey: 'role_id',
      as: 'Users',
    });
  };
  return Role;
};
