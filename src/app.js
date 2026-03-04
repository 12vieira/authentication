const express = require("express");
const userRoutes = require("./domains/user/routes/userRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Barbearia API" });
});

app.use("/api", userRoutes);

module.exports = app;
