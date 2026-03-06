const { Router } = require("express");
const UserController = require("../controller/userController");
const verificarToken = require("../../../middleware/autenticacao"); // Importe o middleware de autenticação
const Autorization = require("../../../middleware/autorizacao"); // Importe o middleware de autorização

const router = Router();

router.post("/users/login", UserController.login);
router.post("/users", UserController.create);

router.use(verificarToken); // Aplica o middleware de autenticação para as rotas abaixo
router.get("/users", Autorization.aluno, Autorization.professor, UserController.list);
router.get("/users/:id", UserController.getById);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.remove);


module.exports = router;
