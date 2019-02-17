import MealService from '../services/meal.service';


const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.getAll;
        return res.json({
            status: 'success',
            data: allMeals,
        }).status(200);
    },


    /*
      Expect json of format
      {
        'name': 'sample name',
        'price': '500',
        'image': 'image.png'
      }
    */
    addMeal(req, res) {
        const meal = req.body;
        const mealCreated = MealService.addMeal(meal);
        return res.json({
            status: 'success',
            data: createdMeal,
        }).status(201)
    },

    getMeal(req, res) {
        const id = req.params.id;
        const meal = MealService.getMeal(id);
        let response = {};
        let status = 0;
        if(Object.keys(meal).length > 0) {
            response = {
                ...response,
                status: 'success',
                data: meal,
            };
            status = 200;
        } else {
            response = {
                ...response,
                status: 'error',
                message: `meal with id: ${id} not found`,
            };
            status = 404;
        }
    }
}