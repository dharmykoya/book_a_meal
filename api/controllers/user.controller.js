import UserService from '../services/user.service';


const UserController = {
  /**
   * Create A User
   * @param {object} req
   * @param {object} res
   */
  signup(req, res) {
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
            res.status(201).send({
              status: 'success',
            });
          }
        });
        // .then((createdUser) => {
        //   console.log('created user', createdUser);
        //   if (createdUser) {
        //     res.status(201).send({
        //       status: 'success',
        //     });
        //   } else {
        //     res.status(200).send({
        //       status: 'hello',
        //       message: result.response,
        //     });
        //   }
        // });
      });
  },
  /**
   * login
   * @param {object} req
   * @param {object} res
   */
  login(req, res) {
    return UserService.authenticate(req.body)
      .then((token) => {
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
  },

};

export default UserController;
