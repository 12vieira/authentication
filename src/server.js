require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./database");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Barbearia API rodando na porta ${PORT}`);
});

module.exports = { app, sequelize };
