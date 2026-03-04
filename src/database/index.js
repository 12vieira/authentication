const { Sequelize } = require("sequelize");
const config = require("../config/database");

const sequelize = config.url
  ? new Sequelize(config.url, { ...config.options })
  : new Sequelize(
      config.database,
      config.username,
      config.password,
      config.options
    );

module.exports = { sequelize };
