/* eslint-disable import/first */
require('dotenv').config();

// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';
// import configJson from '../config/config';

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';

// const config = configJson[env];
// const db = {};

// let sequelize;

// console.log(env);
// console.log(process.env.DATABASE_URL);
// if (config.environment === 'production') {
//   // This block will run only on production and use the environment variable set in the .env file
//   // sequelize = new Sequelize(process.env[config.use_env_variable]);
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS, {
//       connectionString: process.env.DATABASE_URL,
//       // port: process.env.DB_PORT,
//       dialect: 'postgres',
//       dialectOption: {
//         ssl: true,
//         native: true,
//       },
//       logging: true,
//     },
//   );
// }


// if (config.use_env_variable) {
//   sequelize = new Sequelize({ dialect: 'postgres' }, process.env[config.use_env_variable]);
// } else {
//   sequelize = new Sequelize(
//     //   config.database, config.username, config.password, config, config.dialect,
//     config.database, config.username, config.password, {
//       host: 'localhost',
//       dialect: 'postgres',
//       timezone: 'Africa/Lagos',
//     },
//   );
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => (file.indexOf('.') !== 0)
//     && (file !== basename)
//     && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

// console.log('environment', env);
// console.log('url', process.env[config.use_env_variable]);

let sequelize;

// if (config === 'production') {
//   // This block will run only on production and use the environment variable set in the .env file
//   // sequelize = new Sequelize(process.env[config.use_env_variable]);
//   console.log('damilola');
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS, {
//       connectionString: process.env.DATABASE_URL,
//       // port: process.env.DB_PORT,
//       dialect: 'postgres',
//       dialectOption: {
//         ssl: true,
//         native: true,
//       },
//       logging: true,
//     },
//   );
// }
if (config.use_env_variable) {
  //sequelize = new Sequelize(process.env[config.use_env_variable]);
  console.log('damiola', process.env.DATABASE_URL);
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      connectionString: process.env.DATABASE_URL,
      // port: process.env.DB_PORT,
      dialect: 'postgres',
      dialectOption: {
        ssl: true,
        native: true,
      },
      logging: true,
    },
  );
} else {
  sequelize = new Sequelize(
    //   config.database, config.username, config.password, config, config.dialect,
    config.database, config.username, config.password, {
      host: 'localhost',
      dialect: 'postgres',
      timezone: 'Africa/Lagos',
    },
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0)
    && (file !== basename)
    && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
