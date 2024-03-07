const { addUser, getUser, getUsers, delUser, editUser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/createUser", addUser);
router.get("/", getUsers);
router.get("/getUser/:id", getUser);
router.delete("/deleteUser/:id", delUser);
router.put("/updateUser/:id", editUser);

module.exports = router;
