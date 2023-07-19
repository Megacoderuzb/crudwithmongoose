const controllers = require("../controllers/users");

const router = require("express").Router();

router.get("/users", controllers.getUsers);
router.get("/users/:id", controllers.getUsersByID);
router.post("/users", controllers.addUsers);
router.put("/users/:id", controllers.updateUsers);
router.delete("/users/:id", controllers.deleteUsers);

module.exports = router;
