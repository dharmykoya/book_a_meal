export default {
  orders: [
    {
      id: 1,
      user_name: 'Damilola',
      user_id: 4,
      meal_order: [
        {
          id: 1,
          name: 'Jollof Rice',
          price: 350,
          quantity: 2,
          total: 700,
        },
        {
          id: 2,
          name: 'Fried Rice',
          price: 400,
          quantity: 1,
          total: 400,
        },
      ],
      address: '20, oluwole, lagos.',
      phone_no: '08123456789',
      total_cost: 1100,
    },
    {
      id: 2,
      user_name: 'David',
      user_id: 5,
      meal_order: [
        {
          id: 1,
          name: 'Jollof Rice',
          price: 350,
          quantity: 1,
          total: 350,
        },
        {
          id: 3,
          name: 'Pounded Yam and Efo',
          price: 600,
          quantity: 1,
          total: 600,
        },
      ],
      address: '20, Ajayi, Lagos.',
      phone_no: '08123456789',
      total_cost: 950,
    },
  ],
};
