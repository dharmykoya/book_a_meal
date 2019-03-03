import jwt from 'jsonwebtoken';
import Helper from './helper';
import config from '../config/configuration';
import { User, Caterer } from '../models';


/**
 * @description - Describes the Users behaviour of the app, basic CRUD operations etc.
 */
class UserService {
  /**
   * Checks the email in the request
   * @static
   * @description - Checks id the email in the request body exist on the system already.
   * @param{Object} email - api request
   * @param{Object} res - check response
   * @return{json} the email
   */
  static emailExist(email) {
    return User.findAll({
      where: {
        email,
      },
    });
  }

  /**
   * Create A User
   * @static
   * @description - Creates a new user in the app.
   * @param{Object} user - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */

  static signup(user, callback) {
    let response = {};
    if (!user.email || !user.password || !user.name || !user.phone_number) {
      response = { message: 'Some values are missing', err: true };
      return callback(response);
    }
    if (!Helper.isValidEmail(user.email)) {
      response = { message: 'Please enter a valid email address', err: true };
      return callback(response);
    }
    const hashPassword = Helper.hashPassword(user.password);
    if (user.type === 2) {
      if (!user.restaurant_name || !user.restaurant_logo) {
        response = { message: 'Some values are missing', err: true };
        return callback(response);
      }
      User.create({
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        password: hashPassword,
        role_id: 3,
        authorizations: [2, 3, 4, 5],
      })
        .then(createdCaterer => Caterer.create({
          user_id: createdCaterer.id,
          restaurant_name: user.restaurant_name,
          restaurant_logo: user.restaurant_logo,
        })
          .then(caterer => callback({ user: createdCaterer, caterer, err: false }))
          .catch((err) => {
            User.destroy({ where: { id: createdCaterer.id } });
            Caterer.destroy({ where: { user_id: createdCaterer.id } });
            callback({ err: true, message: 'Something went wrong', err_message: err });
          }))
        .catch((err) => {
          callback({ err: true, message: 'Something went wrong', err_message: err });
        });
    } else if (user.type === 3) {
      let data = [];
      User.create({
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        password: hashPassword,
        role_id: 3,
        authorizations: [5, 6],
      })
        .then((createdUser) => {
          data = createdUser.get({
            plain: true,
          });
          callback({ user: data, err: false, message: 'user created successfully' });
        })
        .catch(err =>
          // User.destroy({ where: { id: newUser.id } });
          callback({ err: true, message: 'Something went wrong', err_message: err }));
    } else {
      response = { message: 'You are not authorised to perform this action.', err: true };
      return callback(response);
    }
    return callback;
  }

  static login(user) {
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
        console.log('dami', foundUser);
        const payload = {
          email: foundUser.email,
          id: foundUser.id,
          role_id: foundUser.role_id,
          time: new Date(),
        };
        const token = jwt.sign(payload, config.secret, {
          expiresIn: config.tokenExpireTime,
        });
        const loginUser = {
          token,
          user: foundUser,
        };
        return loginUser;
      });
  }
}

export default UserService;
