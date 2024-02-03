const env = process.env.NODE_ENV || 'development';
const dbConfig = require('./../config/config.js')[env];
const Sequelize = require('sequelize');
const fs = require('fs');

const path = require('path');
const basename = path.basename(__filename);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT
});

const db = {};

fs.readdirSync(__dirname)
.filter((file) => {
  return (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  );
})
.forEach((file, i) => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize)
  db[model.name] = model;
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;