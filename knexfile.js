const path = require("path");
require("dotenv").config();
const {
  NODE_ENV = "development",
  DEV_DATABASE_URL,
  PROD_DATABASE_URL,
} = process.env;

const DATABASE_URL = NODE_ENV === 'production' ? PROD_DATABASE_URL : DEV_DATABASE_URL;

module.exports = {
  development: {
    client: "pg",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
