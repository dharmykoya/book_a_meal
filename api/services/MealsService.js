import Meals from '../models/Meals';

export default class MealsService {
  fetchAllMeals() {
    //Data from the database
    this.meals = [
      {
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
      {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
      {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
    ];
    
    
    //When we retrieve the data,
    //simulation
    return this.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      meal.currency = data.currency;
      return meal;
    });
  }


  getAll() {
    //This will be a call to our ORM
    //and manipulations to make data presentable
    return this.fetchAllMeals();
  }

  get(id) {
    //because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }
}