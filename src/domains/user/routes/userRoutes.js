const { Router } = require("express");
const UserController = require("../controller/userController");

const router = Router();

router.get("/users", UserController.list);
router.get("/users/:id", UserController.getById);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.remove);

module.exports = router;
