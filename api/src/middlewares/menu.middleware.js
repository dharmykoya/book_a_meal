/* eslint-disable consistent-return */
import Authorizations from '../config/rolesList';


const MenuMiddleware = {

  /**
     * @description - check if the user can setup menu.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  setupMenu(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.CREATE_MENU);

    if (!superAdmin && !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  /**
     * @description - check if the user as the right to get MENU option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  getMenu(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.READ_MENU);

    if (!superAdmin && !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  /**
     * @description - check if the user as the right to update a MENU option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  updateMenu(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.UPDATE_MENU);

    if (!superAdmin && !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  /**
     * @description - check if the user as the right to delete a MENU option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  deleteMenu(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.DELETE_MENU);

    if (!superAdmin && !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
};

export default MenuMiddleware;
