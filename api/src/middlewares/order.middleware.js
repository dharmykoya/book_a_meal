/* eslint-disable consistent-return */
import Authorizations from '../config/rolesList';


const OrderMiddleware = {

  /**
     * @description - check if the user as the right to create meal.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  createOrder(req, res, next) {
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
     * @description - check if the user as the right to get order option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  getOrders(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.READ_ORDER);

    if (!superAdmin && !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  /**
     * @description - check if the user as the right to update a meal option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  updateOrder(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.UPDATE_ORDER);

    if (!superAdmin && !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

};

export default OrderMiddleware;
