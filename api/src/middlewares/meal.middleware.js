import Authorizations from '../config/rolesList';


const MealMiddleware = {

  /**
     * @description - check if the user as the right to create meal.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  createMeal(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.CREATE_MEAL);

    if (!superAdmin || !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  /**
     * @description - check if the user as the right to get meals option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  getMeals(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.READ_MEAL);

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
  updateMeal(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.UPDATE_MEAL);

    if (!superAdmin || !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  /**
     * @description - check if the user as the right to delete a meal option.
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next - moves the request to the next action
     * @returns {object}
     */
  deleteMeal(req, res, next) {
    if (!req.decoded) {
      return res.status(401).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.DELETE_MEAL);

    if (!superAdmin || !caterer) {
      return res.status(403).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
};

export default MealMiddleware;
