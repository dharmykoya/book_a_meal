import MenuService from '../services/menu.service';


const MenuController = {
  fetchAllMenu(req, res) {
    const allMenu = MenuService.getAll();
    return res.status(200).json({
      status: 'success',
      data: allMenu,
    });
  },
  addMenu(req, res) {
    /*
      Expect json of format
      {
          'user_id': 'caterer id'
          'meal_id': [1,3],
          'date': '19-2-2019'
      }
    */

    const menu = req.body;
    const createdMenu = MenuService.addMenu(menu);
    return res.status(201).json({
      status: 'success',
      data: createdMenu,
    });
  },

  /* there is already a menu set for the day in my menuData
   all you have to do is change the meal id in the data */
  getMenu(req, res) {
    const menu = MenuService.getMenu();
    let response = {};
    let status = 0;

    if (Object.keys(menu).length > 0) {
      response = {
        ...response,
        status: 'success',
        data: menu,
      };
      status = 200;
    } else {
      response = {
        ...response,
        status: 'error',
        message: 'menu for today not set yet',
      };
      status = 404;
    }
    return res.status(status).json({
      response,
    });
  },
};

export default MenuController;
