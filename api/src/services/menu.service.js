import Menu from '../models/menu.model';
import MenuData from '../data/menuData';
import MealData from '../data/mealData';

const MenuService = {
  addMenu(menu) {
    const menuLength = MenuData.menu.length;
    const lastId = MenuData.menu[menuLength - 1].id;
    const id = lastId + 1;
    const newMenu = {id, ...menu};
    MenuData.menu = {...MenuData.menu, newMenu};
    return MenuData.menu;
  },

  getMenu() {
    const today = this.getDate();
    //singleMenu = MenuData.menu.find((data) => data.date === today );
    const singleMenu = MenuData.menu.filter((data) => data.date === today);
    const todayMenu = new Menu();
    todayMenu.id = singleMenu[0].id;
    todayMenu.user_id = singleMenu[0].user_id;
    todayMenu.meal_id = this.getMealById(singleMenu[0].meal_id);
    todayMenu.date = singleMenu[0].date
    return todayMenu;
  },

  getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const today = `${day}-${month}-${year}`;
    return today;
  },
  getMealById(mealsId) {
    let result = [];
    mealsId.map((mealId) => {
      MealData.meals.map((meal) => {
        if(mealId === meal.id) {
          result.push(meal)
        }
      })
    })
    return result;
  },

  fetchAllMenu() {
    return MenuData.menu.map((data) =>{
      const newMenu = new Menu();
      newMenu.id = data.id;
      newMenu.user_id = data.user_id;
      newMenu.meal_id = this.getMealById(data.meal_id);
      newMenu.date = data.date
      return newMenu;
    })
  },
}

export default MenuService;