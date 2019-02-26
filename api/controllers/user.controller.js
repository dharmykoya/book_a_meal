import UserService from '../services/user.service';


const UserController = {
  /**
   * Create A User
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  signup(req, res) {
    const user = req.body;
    const createdUser = UserService.signup(user);
    return res.status(201).json(createdUser);
  },
};

export default UserController;
