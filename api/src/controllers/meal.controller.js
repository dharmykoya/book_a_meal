/* eslint-disable max-len */
/* eslint-disable consistent-return */
import MealService from '../services/meal.service';


/**
 *
 *
 * @class MealController
 * @description - handles the request coming from the route and interacts with the mealService class.
 */
class MealController {
  /**
   * @description - get meal for a particular user
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - a meal
   */
  static getMeals(req, res) {
    try {
      const { catererId } = req.decoded.user.user_id;
      MealService.getMeals(catererId, (response) => {
        if (response.err) {
          res.status(401).send({
            status: 'error',
            message: response.message,
          });
        } else {
          res.status(200).send({
            status: 'success',
            meal: response,
          });
        }
      });
    } catch (err) {
      const errMessage = 'try again please';
      res.status(500).send({ errMessage });
    }
    // .then((meals) => {
    //   if (!meals) {
    //     const data = meals.message;
    //     res.status(401).send({
    //       status: 'error',
    //       data,
    //     });
    //   }
    //   res.status(200).send({
    //     status: 'success',
    //     data: meals,
    //   });
    // });
  }

  /**
   * @description - Add a meal option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static addMeal(req, res) {
    const { meal } = req.body;
    MealService.addMeal(meal)
      .then((createdMeal) => {
        if (!createdMeal) {
          const data = createdMeal.error_message;
          res.status(401).send({
            status: 'error',
            data,
          });
        }
        res.status(201).send({
          status: 'success',
          data: createdMeal,
        });
      });
  }

  /**
   * @description - update a meal option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - error or succes messgaes
   */
  static updateMeal(req, res) {
    const { meal } = req.body;
    MealService.updateMeal(meal)
      .then((updatedMeal) => {
        if (!updatedMeal) {
          const data = updatedMeal.error_message;
          res.status(401).send({
            status: 'error',
            data,
          });
        }
        res.status(201).send({
          status: 'success',
          data: updatedMeal.message,
        });
      });
  }

  /**
   * @description - delete a meal option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - error or succes messgaes
   */
  static deleteMeal(req, res) {
    const { meal } = req.body;
    MealService.deleteMeal(meal)
      .then((destroyedMeal) => {
        if (!destroyedMeal) {
          const data = destroyedMeal.error_message;
          res.status(401).send({
            status: 'error',
            data,
          });
        }
        res.status(201).send({
          status: 'success',
          data: destroyedMeal.message,
        });
      });
  }
}

export default MealController;
