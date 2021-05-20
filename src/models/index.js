const dbConfig = require("../../config.js");

const { Sequelize, DataTypes, Op } = require("sequelize");


const sequelize = new Sequelize(dbConfig.db.DB_NAME, dbConfig.db.DB_USER, dbConfig.db.DB_PASS, {
    host: dbConfig.db.DB_HOST,
    dialect: dbConfig.db.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.db.pool.max,
      min: dbConfig.db.pool.min,
      acquire: dbConfig.db.pool.acquire,
      idle: dbConfig.db.pool.idle
    }
});


const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;
db.vehicles  = require("./vehicles.models")(sequelize, Sequelize, DataTypes);



module.exports = db;