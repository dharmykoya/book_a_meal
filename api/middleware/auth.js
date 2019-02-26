import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../services/user.service';
import Users from '../models/user';
import Helper from '../services/helper';
import config from '../config/config';

const Auth = {
  /**
   * Verify Token
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object|void} response object
   */
  async verifyToken(req, res, next) {
    // const headerToken = req.headers['x-access-token'];
    // if (!token) {
    //   return res.status(400).send({ 'message': 'Token is not provided' });
    // }
    return Users.findOne({
      where: {
        login: req.body,
      },
      raw: true,
    })
      .then((user) => {
        if (!user) {
          throw new Error('Authentication failed. User not found');
        }
        if (!Helper.comparePassword(user.password, req.body.password)) {
          throw new Error('Authentication failed. wrong email or password');
        }
        const payload = {
          login: user.login,
          id: user.id,
          time: new Date(),
        };
        const token = jwt.sign(payload, config.secret, {
          expiresIn: config.tokenExpireTime,
        });
        next();
        return token;
      });
  },
};

export default Auth;
