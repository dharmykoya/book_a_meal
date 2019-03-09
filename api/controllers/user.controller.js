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
        UserService.signup(user)
          .then(() => res.status(201).send({
            status: 'success',
          }));
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
