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
  // static signup(req, res) {
  //   const user = req.body;
  //   return UserService.emailExist(req.body.email || '')
  //     .then((exist) => {
  //       if (exist.length > 0) {
  //         return res.send({
  //           status: 'failed',
  //           message: 'Registration failed. User with this email already registered.',
  //         });
  //       }
  //       UserService.signup(user, (response) => {
  //         if (response.err) {
  //           res.status(400).send({
  //             status: 'error',
  //             message: response,
  //           });
  //         } else {
  //           res.status(201).send({
  //             status: 'success',
  //             user: response.data,
  //             message: 'please login with your details',
  //           });
  //         }
  //       });
  //     });
  // }
  static async signUp(req, res) {
    console.log(process.env.DATABASE_URL);
    const user = req.body;
    try {
      const createdUser = await UserService.addUser(user);
      res.status(201).send({ createdUser });
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  /**
   * login
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {Object} loginUser
   * @memberof userController
   */
  static async login(req, res) {
    const user = req.body;
    try {
      const userLogin = await UserService.login(user);
      res.status(200).send({ userLogin });
    } catch (error) {
      res.status(400).send({ error });
    }
  }
}

export default UserController;
