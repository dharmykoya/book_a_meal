const Authorizations = {
  GLOBAL: 1,

  // Crude authorizations for user
  READ_USER: 2,
  UPDATE_USER: 3,
  DELETE_USER: 4,

  // Crude authorizations for meal
  CREATE_MEAL: 5,
  READ_MEAL: 6,
  UPDATE_MEAL: 7,
  DELETE_MEAL: 8,

  // Crude authorizations for menu
  CREATE_MENU: 9,
  READ_MENU: 10,
  UPDATE_MENU: 11,
  DELETE_MENU: 12,

  // crude authorizations for order
  CREATE_ORDER: 13,
  READ_ORDER: 14,
  UPDATE_ORDER: 15,
  DELETE_ORDER: 16,

};

export default Authorizations;
