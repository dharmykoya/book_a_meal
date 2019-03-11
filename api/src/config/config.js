require('dotenv').config();

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
