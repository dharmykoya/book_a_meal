import MealService from '../services1/meal.service';


const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.getAll();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },

  addMeal(req, res) {
    /*
            Expect json of format
            {
                'name': 'sample name',
                'user_id': 'caterer id'
                'price': '500',
                'image': 'image.png'
            }
        */
    const meal = req.body;
    const createdMeal = MealService.addMeal(meal);
    return res.status(201).json({
      status: 'success',
      data: createdMeal,
    });
  },
  getMeal(req, res) {
    const [id] = req.params.id;
    const meal = MealService.getMeal(id);
    let response;
    if (Object.keys(meal).length > 0) {
      res.status(200);
      response = res.json({
        status: 'success',
        data: meal,
      });
    } else {
      res.status(404);
      response = res.json({
        status: 'error',
        message: `meal with id: ${id} not found`,
      });
    }
    return response;
  },
  updateMeal(req, res) {
    /*
            Expect json of format
            {
                'name': 'sample name',
                'user_id': 'caterer id'
                'price': '500',
                'image': 'image.png'
            }
        */

    const { id } = req.params;
    const entry = req.body;
    const result = MealService.updateMeal(id, entry);
    let response = {};
    let status = 0;
    if (result.foundId) {
      response = {
        ...response,
        status: 'success',
        message: `Meal with id: ${id} edited successfully.`,
        data: result.editedMeal,
      };
      status = 202;
    } else {
      response = {
        ...response,
        status: 'error',
        message: `Meal with id: ${id} not found.`,
      };
      status = 404;
    }
    return res.status(status).json({
      response,
    });
  },
  deleteMeal(req, res) {
    const { id } = req.params;
    const foundId = MealService.deleteMeal(id);
    let response = {};
    let status = 0;
    if (foundId) {
      response = {
        ...response,
        status: 'success',
        message: `Meal with id: ${id} deleted successfully.`,
      };
      status = 202;
    } else {
      response = {
        ...response,
        status: 'error',
        message: `Meal with id: ${id} not found.`,
      };
      status = 404;
    }
    return res.status(status).json({
      response,
    });
  },
};

export default MealController;