require('dotenv').config();

// export default {
//   development: {
//     username: 'postgres',
//     password: 'postgres',
//     database: 'bookmeal',
//     host: '127.0.0.1',
//     port: '5432',
//     dialect: 'postgres',
//     timezone: 'Africa/Lagos',
//   },
//   test: {
//     username: 'postgres',
//     password: 'postgres',
//     database: 'bookmeal',
//     host: '127.0.0.1',
//     port: 5432,
//     dialect: 'postgres',
//     timezone: 'Africa/Lagos',
//   },
// };

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'bookmeal',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  // production: {
  //   username: process.env.POSTGRES_USERNAME,
  //   password: process.env.POSTGRES_PASSWORD,
  //   database: process.env.POSTGRES_DATABASE,
  //   host: process.env.POSTGRES_HOST,
  //   dialect: 'postgres',
  //   // use_env_variable: process.env.DATABASE_URL,
  //   DATABASE_URL: process.env.DATABASE_URL,
  // },
  production: {
    // username: 'vpgiayebufyery',
    // password: 'e88ada98cc1ade3b42a9b9d75af78f687607d4537d574ae28fa13f5d9050847c',
    // database: 'd6pog216fkakm1',
    // host: 5432,
    // dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    // DATABASE_URL: process.env.DATABASE_URL,
  },
  travis: {
    username: 'postgres',
    password: 'postgres',
    database: 'travis',
    host: 'localhost',
    dialect: 'postgres',
  },
};
