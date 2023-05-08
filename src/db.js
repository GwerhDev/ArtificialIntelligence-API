const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres://postgres:BXwTy5CcLUIEG6W@artificialintelligence-api-db.flycast:5432",
  {
    logging: false,
    native: false,
  }
);

module.exports = { sequelize };
