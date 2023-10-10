require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const DriverModel = require("./models/Driver");
const TeamModel = require("./models/Team");

// Se le envía la info de nuestro archivo ENV a Sequelize
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// Se ejecuta la función de los modelos y se pasa sequelize como argumento
DriverModel(sequelize);
TeamModel(sequelize);

// Se crea una relación de muchos a muchos en ambos sentidos
const { Driver, Team } = sequelize.models;
Driver.belongsToMany(Team, { through: "driver_team" });
Team.belongsToMany(Driver, { through: "driver_team" });

module.exports = {
  Team,
  Driver,
  conn: sequelize,
};
