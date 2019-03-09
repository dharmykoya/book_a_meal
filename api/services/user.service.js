// import User from '../models/user';
import jwt from 'jsonwebtoken';
import Helper from './helper';
import config from '../config/config';


const { User } = require('../models');
// import db from '../models/index';
// const Us = db.Sequelize;

// const UserService = {
//   signup(user) {
//     if (!user.email || !user.password || !user.name || !user.phone_number) {
//       return { message: 'Some values are missing' };
//     }
//     if (!Helper.isValidEmail(user.email)) {
//       return { message: 'Please enter a valid email address' };
//     }
//     let response;
//     const hashPassword = Helper.hashPassword(user.password);
//     User.create({
//       name: user.name,
//       email: user.email,
//       phone_number: user.phone_number,
//       password: hashPassword,
//       role_id: 3,
//     })
//       .then((userData) => ({
//         response = {
//           status: 'success',
//           data: userData,
//           token: Helper.generateToken(userData.id),
//         };
//         return response;
//       }
//     ));
//   },
// };
const UserService = {
  emailExist(email) {
    return User.findAll({
      where: {
        email,
      },
    });
  },
  signup(user) {
    if (!user.email || !user.password || !user.name || !user.phone_number) {
      return { message: 'Some values are missing' };
    }
    if (!Helper.isValidEmail(user.email)) {
      return { message: 'Please enter a valid email address' };
    }
    const hashPassword = Helper.hashPassword(user.password);
    return User.create({
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      password: hashPassword,
      role_id: 3,
    });
  },
  authenticate(user) {
    if (!user.email || !user.password) {
      return { message: 'Some values are missing' };
    }
    if (!Helper.isValidEmail(user.email)) {
      return { message: 'Please enter a valid email address' };
    }
    return User.findAll({
      where: {
        email: user.email,
      },
    })
      .then((foundUser) => {
        if (!foundUser) {
          return { message: 'Authentication failed. User not found.' };
        }
        if (!Helper.comparePassword(user.password, foundUser[0].password)) {
          // throw new Error('Authentication failed. Wrong password.');
          return { message: 'Authentication failed.Wrong password.' };
        }
        const payload = {
          email: foundUser.email,
          id: foundUser.id,
          time: new Date(),
        };
        const token = jwt.sign(payload, config.secret, {
          expiresIn: config.tokenExpireTime,
        });
        return token;
      });
  },
};

export default UserService;
