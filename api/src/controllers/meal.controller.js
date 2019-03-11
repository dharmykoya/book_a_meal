/* eslint-disable camelcase */
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
  // static fetchAllMealsByCaterer(req, res) {
  //   try {
  //     const { caterer_id } = req.decoded.user;
  //     MealService.fetchAllMealsByCaterer(caterer_id, (response) => {
  //       if (response.err) {
  //         res.status(401).send({
  //           status: 'error',
  //           message: response.message,
  //         });
  //       } else {
  //         res.status(200).send({
  //           status: 'success',
  //           meal: response,
  //         });
  //       }
  //     });
  //   } catch (err) {
  //     const errMessage = 'try again please';
  //     res.status(500).send({ errMessage, });
  //   }
  //   // .then((meals) => {
  //   //   if (!meals) {
  //   //     const data = meals.message;
  //   //     res.status(401).send({
  //   //       status: 'error',
  //   //       data,
  //   //     });
  //   //   }
  //   //   res.status(200).send({
  //   //     status: 'success',
  //   //     data: meals,
  //   //   });
  //   // });
  // }

  static async fetchAllMealsByCaterer(req, res) {
    try {
      const { caterer_id } = req.decoded.user;
      const foundMeals = await MealService.fetchAllMealsByCaterer(caterer_id);
      res.status(200).send({
        status: 'success',
        meals: foundMeals,
      });
    } catch (error) {
      res.status(404).send({ error });
    }
  }

  /**
   * @description - Add a meal option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - created meal
   */
  static async addMeal(req, res) {
    const { caterer_id } = req.decoded.user;    
    const { name, price } = req.body;    
    const meal = req.body;
    try {
      if (!name || !price) {
        const response = 'missing fields';
        throw response;
      }
      const createdMeal = await MealService.addMeal(meal, caterer_id);
      if (createdMeal.err) {
        const data = createdMeal.error_message;
        res.status(401).send({
          status: 'failed',
          data,
        });
      }
      res.status(201).send({
        status: 'success',
        createdMeal,
      });
    } catch (err) {
      res.status(500).send({
        status: 'failed',
        err,
      });
    }
  }

  /**
   * @description - update a meal option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - error or succes messgaes
   */
  // static updateMeal(req, res) {
  //   const { meal } = req.body;
  //   MealService.updateMeal(meal)
  //     .then((updatedMeal) => {
  //       if (!updatedMeal) {
  //         const data = updatedMeal.error_message;
  //         res.status(401).send({
  //           status: 'error',
  //           data,
  //         });
  //       }
  //       res.status(201).send({
  //         status: 'success',
  //         data: updatedMeal.message,
  //       });
  //     });
  // }
  static async updateMeal(req, res) {
    const { caterer_id } = req.decoded.user;
    const meal = req.body;
    try {
      const updatedMeal = await MealService.updateMeal(req.params.id, caterer_id, meal);
      res.status(202).send({
        status: 'success',
        updatedMeal,
      });
    } catch (err) {
      res.status(400).send({
        status: 'Please try again or contact admin',
        err,
      });
    }
  }

  /**
   * @description - delete a meal option, only a caterer or an admin can perform this action.
   * @static
   * @param {object} req
   * @memberof MealController
   * @param {object} res
   * @returns {*} - error or succes messgaes
   */
  static async deleteMeal(req, res) {
    const meal_id = req.params.id;
    const { caterer_id } = req.decoded.user;
    try {
      const destroyedMeal = await MealService.deleteMeal(meal_id, caterer_id);
      res.status(202).send({
        status: 'success',
        destroyedMeal,
      });
    } catch (err) {
      res.status(400).send({
        status: 'false',
        err,
      });
    }
  }
}

export default MealController;
