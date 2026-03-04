const {
  DB_HOST = "localhost",
  DB_PORT = "5432",
  DB_NAME = "barbearia",
  DB_USER = "postgres",
  DB_PASS = "postgres",
  DATABASE_URL,
} = process.env;

module.exports = {
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  url: DATABASE_URL,
  options: {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: "postgres",
    logging: false,
  },
};
