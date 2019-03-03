/* eslint-disable max-len */
import UserService from '../services/user.service';

/**
 *
 *
 * @class - UserController
 * @description - handles the request coming from the route and interacts with the userService class.
 */
class UserController {
  /**
   * Create A User
   * @static
   * @param {object} req
   * @memberof UserController
   * @param {object} res
   * @returns {*} createUser
   */
  static signup(req, res) {
    const user = req.body;
    return UserService.emailExist(req.body.email || '')
      .then((exist) => {
        if (exist.length > 0) {
          return res.send({
            status: 'failed',
            message: 'Registration failed. User with this email already registered.',
          });
        }
        UserService.signup(user, (response) => {
          if (response.err) {
            res.status(400).send({
              status: 'error',
              message: response.message,
            });
          } else {
            console.log('dami', response.data);
            res.status(201).send({
              status: 'success',
              user: response.data,
            });
          }
        });
      });
  }

  /**
   * login
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {Object} loginUser
   * @memberof userController
   */
  static login(req, res) {
    return UserService.login(req.body)
      .then((token) => {
        console.log(token);
        res.send({
          status: 'success',
          data: { token },
        });
      });
    // .catch((err) = {
    //   res.send({
    //     status: 'failed',
    //     message: err.message
    //   })
    // })
  }
}

export default UserController;
