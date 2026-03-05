const { Router } = require("express");
const UserController = require("../controller/userController");
const autenticacao = require("../../../middleware/autenticacao"); // Importe o middleware de autenticação
//const autorizacao = require("../../../middleware/autorizacao"); // Importe o middleware de autorização

const router = Router();

router.get("/users", UserController.list);
router.get("/users/:id", UserController.getById);
router.post("/users/login", UserController.login);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", autenticacao, UserController.remove);

module.exports = router;
