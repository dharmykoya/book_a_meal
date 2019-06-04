/* eslint-disable consistent-return */
import Helper from './helper';
import config from '../config/configuration';
import { User, Caterer } from '../models';


/**
 * @class UserService
 * @description - Describes the Users behaviour of the app, basic CRUD operations etc.
 */
class UserService {
  /**
   * Checks the email in the request
   * @static
   * @description - Checks id the email in the request body exist on the system already.
   * @param{Object} email - api request
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
   * @param{Object} user - user details to be created.
   * @param{Object} callback - call back function to return responses.
   * @return{json} the registered user's detail
   */

  // static signup(user, callback) {
  //   let response = {};
  //   if (!user.email || !user.password || !user.name || !user.phone_number) {
  //     response = { message: 'Some values are missing', err: true };
  //     return callback(response);
  //   }
  //   if (!Helper.isValidEmail(user.email)) {
  //     response = { message: 'Please enter a valid email address', err: true };
  //     return callback(response);
  //   }
  //   const hashPassword = Helper.hashPassword(user.password);

  //   // creating a caterer
  //   if (user.type === 2) {
  //     if (!user.restaurant_name || !user.restaurant_logo) {
  //       response = { message: 'Some values are missing', err: true };
  //       return callback(response);
  //     }
  //     User.create({
  //       name: user.name,
  //       email: user.email,
  //       phone_number: user.phone_number,
  //       password: hashPassword,
  //       role_id: 2,
  //       authorizations: [5, 6, 7, 8, 9, 10],
  //     })
  //       .then(createdCaterer => Caterer.create({
  //         user_id: createdCaterer.id,
  //         restaurant_name: user.restaurant_name,
  //         restaurant_logo: user.restaurant_logo,
  //       })
  //         .then(caterer => callback({ user: createdCaterer, caterer, err: false }))
  //         .catch((err) => {
  //           User.destroy({ where: { id: createdCaterer.id } });
  //           Caterer.destroy({ where: { user_id: createdCaterer.id } });
  //           callback({ err: true, message: 'Something went wrong', err_message: err });
  //         }))
  //       .catch((err) => {
  //         callback({ err: true, message: 'Something went wrong', err_message: err });
  //       });
  //   } else if (user.type === 3) {
  //     let data = [];
  //     User.create({
  //       name: user.name,
  //       email: user.email,
  //       phone_number: user.phone_number,
  //       password: hashPassword,
  //       role_id: 3,
  //       authorizations: [3, 10, 13, 14, 15],
  //     })
  //       .then((createdUser) => {
  //         data = createdUser.get({
  //           plain: true,
  //         });
  //         callback({ user: data, err: false, message: 'user created successfully' });
  //       })
  //       .catch(err =>
  //         // User.destroy({ where: { id: newUser.id } });
  //         callback({ err: true, message: 'Something went wrong', err_message: err }));
  //   } else {
  //     response = { message: 'You are not authorised to perform this action.', err: true };
  //     return callback(response);
  //   }
  //   return callback;
  // }

  static async addUser(user) {
    try {
      let response = {};
      if (!user.email || !user.password || !user.name || !user.phone_number) {
        response = { message: 'Some values are missing', err: true };
        throw response;
      }
      if (!Helper.isValidEmail(user.email)) {
        response = { message: 'Please enter a valid email address', err: true };
        throw response;
      }
      const hashPassword = Helper.hashPassword(user.password);
      
      if (user.type === 2) {
        let data = {};
        if (!user.restaurant_name || !user.restaurant_logo) {
          response = { message: 'Some values are missing', err: true };
          throw response;
        }
        const duplicateEmail = await User.findOne({ where: { email: user.email } });
        if (duplicateEmail) {
          response = { message: 'You have created an account with this email', err: true };
          throw response;
        }
        const createdUser = await User.create({
          name: user.name,
          email: user.email,
          phone_number: user.phone_number,
          password: hashPassword,
          role_id: 2,
          authorizations: [5, 6, 7, 8, 9, 10],
        });
        if (createdUser) {
          const createdCaterer = await Caterer.create({
            user_id: createdUser.dataValues.id,
            restaurant_name: user.restaurant_name,
            restaurant_logo: user.restaurant_logo,
          });
          if (!createdCaterer) {
            User.destroy({ where: { id: createdCaterer.id } });
            response = { message: 'could not create user' };
            throw response;
          }
          if (createdCaterer) {
            data = createdCaterer.get({
              plain: true,
            });
            response = { user: data, err: false, message: 'user created successfully' };
            return response;
          }
        }
      } else if (user.type === 3) {
        let data = {};
        const duplicateEmail = await User.findOne({ where: { email: user.email } });
        if (duplicateEmail) {
          response = { message: 'You have created an account with this email ', err: true };
          throw response;
        }
        const createdUser = await User.create({
          name: user.name,
          email: user.email,
          phone_number: user.phone_number,
          password: hashPassword,
          role_id: 3,
          authorizations: [3, 10, 13, 14, 15],
        });
        if (createdUser) {
          data = createdUser.get({
            plain: true,
          });
          response = { user: data, err: false, message: 'user created successfully' };
          return response;
        }
      } else if (user.type === 1) { 
        let data = {};
        const duplicateEmail = await User.findOne({ where: { email: user.email } });
        if (duplicateEmail) {
          response = { message: 'You have created an account with this email ', err: true };
          throw response;
        }
        const createdUser = await User.create({
          name: user.name,
          email: user.email,
          phone_number: user.phone_number,
          password: hashPassword,
          role_id: 1,
          authorizations: [1],
        });
        if (createdUser) {
          data = createdUser.get({
            plain: true,
          });
          response = { user: data, err: false, message: 'user created successfully' };
          return response;
        }
      }
      response = { message: 'Please select a type', err: true };
      return response;
    } catch (error) {
      const response = { message: error.message, err: true };
      throw response;
    }
  }

  /**
   * Authenticate A User
   * @static
   * @description - authenticate a user trying to login in to the app.
   * @param{Object} user - user email to query the database.
   * @return{json} the user's detail
   */
  // static async login(user, callback) {
  //   let response = {};
  //   if (!user.email || !user.password) {
  //     response = { message: 'Some values are missing', err: true };
  //     return callback(response);
  //   }
  //   if (!Helper.isValidEmail(user.email)) {
  //     response = { message: 'Please enter a valid email address', err: true };
  //     return callback(response);
  //   }
  //   return User.findOne({
  //     where: {
  //       email: user.email,
  //     },
  //   })
  //     .then(async (foundUser) => {
  //       if (!foundUser) {
  //         return callback({ message: 'Authentication failed. User not found.' });
  //       }
  //       if (!Helper.comparePassword(user.password, foundUser.password)) {
  //         // throw new Error('Authentication failed. Wrong password.');
  //         return callback({ message: 'Authentication failed.Wrong password.' });
  //       }
  //       let username;
  //       try {
  //         // username = await foundUser.getCaterer();
  //         const foundCaterer = await Caterer.findOne({ where: { user_id: foundUser.id } });
  //         username = foundCaterer.dataValues.id;
  //       } catch (err) {
  //         const error = { error_message: 'user is probably not a caterer', err };
  //         throw error;
  //       }
  //       let authUser = {};
  //       if (foundUser.role_id === 2) {
  //         authUser = {
  //           user_id: foundUser.id,
  //           caterer_id: username,
  //           name: foundUser.name,
  //           role_id: foundUser.role_id,
  //           authorizations: foundUser.authorizations,
  //         };
  //       }
  //       if (foundUser.role_id === 3) {
  //         authUser = {
  //           user_id: foundUser.id,
  //           name: foundUser.name,
  //           role_id: foundUser.role_id,
  //           authorizations: foundUser.authorizations,
  //         };
  //       }
  //       const token = Helper.generateToken(authUser, config.secret);
  //       const loginUser = {
  //         token,
  //         user: foundUser,
  //         message: 'login successful',
  //       };
  //       return callback(loginUser);
  //     });
  // }
  static async login(user) {
    try {
      let response = {};
      if (!user.email || !user.password) {
        response = { message: 'Some values are missing', err: true };
        throw response;
      }
      if (!Helper.isValidEmail(user.email)) {
        response = { message: 'Please enter a valid email address', err: true };
        throw response;
      }
      const foundUser = await User.findOne({
        where: {
          email: user.email,
        },
      });

      if (!foundUser) {
        response = { message: 'Authentication failed. User not found.' };
        throw response;
      }
      if (!Helper.comparePassword(user.password, foundUser.password)) {
        response = { message: 'Authentication failed.Wrong password.' };
        throw response;
      }
      let authUser = {};
      if (foundUser.role_id === 2) {
        const foundCaterer = await Caterer.findOne({ where: { user_id: foundUser.id } });
        const catererId = foundCaterer.dataValues.id;
        authUser = {
          user_id: foundUser.id,
          caterer_id: catererId,
          name: foundUser.name,
          role_id: foundUser.role_id,
          authorizations: foundUser.authorizations,
        };
      }
      if (foundUser.role_id === 3) {
        authUser = {
          user_id: foundUser.id,
          name: foundUser.name,
          role_id: foundUser.role_id,
          authorizations: foundUser.authorizations,
        };
      }

      const token = Helper.generateToken(authUser, config.secret);
      const loginUser = {
        token,
        user: foundUser,
        message: 'login successful',
      };
      return loginUser;
    } catch (error) {
      const response = { message: error.message, err: true };
      throw response;
    }
  }
}

export default UserService;