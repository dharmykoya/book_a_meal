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
    const data =  this.fetchAllMeals();
    return data;
  }

  // get(id) {
  //   //because we have our data in an array which starts at 0
  //   return this.fetchAllMeals()[id - 1];
  // }

  get(id) {
    //because we have our data in an array which starts at 0
    if(this.fetchAllMeals()[id - 1]) {
      return this.fetchAllMeals()[id - 1];
    } else{
      return null;
    }
    
  }

  // addMeal(meal) {
  //   const mealLength = this.meals.length;
  //   const lastId = this.meals[mealLength - 1].id;
  //   const id = lastId + 1;
  //   const newMeal = {id, ...meal};
  //   this.meals = [...this.meals, newMeal];
  //   // return this.meals.push(meal);
  //   return newMeal;
  // }

  addMeal(meal) {
    let meals = this.fetchAllMeals();
    const mealLength = this.fetchAllMeals().length;
    const lastId = meals[mealLength - 1].id;
    const id = lastId + 1;
    const newMeal = {id, ...meal};
    meals = [...meals, newMeal];
    // return this.meals.push(meal);
    return meals;
  }

  test(message) {
    return 'Damilola';
  }
}