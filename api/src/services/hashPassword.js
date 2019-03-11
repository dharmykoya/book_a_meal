import bcrypt from 'bcrypt';

let password = '';
const hashPassword = (pass) => {
  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  password = bcrypt.hashSync(pass, bcrypt.genSaltSync(8));
  return password;
};

export default hashPassword;
