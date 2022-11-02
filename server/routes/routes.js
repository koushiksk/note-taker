const router = require("express").Router();

const NoteController = require("../Controller/Note");
const UserController = require("../Controller/User");

router.get("/user", NoteController.getAllNote);
router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);

module.exports = router;