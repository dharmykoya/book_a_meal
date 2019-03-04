import Todaydate from '../services1/date';

export default {
  menu: [
    {
      id: 1,
      user_id: 1,
      meal_id: [1, 3],
      date: '25-1-2019',
    },

    {
      id: 2,
      user_id: 1,
      meal_id: [1, 2, 3],
      date: '14-2-2019',
    },

    {
      id: 3,
      user_id: 1,
      meal_id: [1, 3],
      date: Todaydate.getDate(),
    },
  ],
};
