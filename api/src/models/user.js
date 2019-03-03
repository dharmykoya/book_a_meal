export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name',
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address',
      },
      unique: {
        args: true,
        msg: 'Email already exists',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address',
        },
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Phone number already exists',
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Please enter your address',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password',
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password should be at least 8 characters');
          }
        },
      },
    },
    authorizations: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      allowNull: true,
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: 'role_id',
      as: 'Role',
    });
  };
  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: 'user_id',
      as: 'Orders',
    });
  };
  return User;
};
