import User from '../models/user';
import Helper from './helper';
import db from '../models/index';
const Us = db.Sequelize;

const UserService = {
  signup(user) {
    if (!user.email || !user.password || !user.name || !user.phone_number) {
      return { message: 'Some values are missing' };
    }
    if (!Helper.isValidEmail(user.email)) {
      return { message: 'Please enter a valid email address' };
    }
    const hashPassword = Helper.hashPassword(user.password);
    return Us.create({
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      password: hashPassword,
      role_id: 3,
    })
      .then(userData => ({
        status: 'success',
        data: userData,
        token: Helper.generateToken(userData.id),
      }));
  },
};

export default UserService;
