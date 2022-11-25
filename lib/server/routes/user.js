const express = require("express");
const router = express.Router();

// routes
const { signupUser, login, isUserExist } = require("../controller/userController");

// Middlewares
const { isLoggedIn } = require("../middleware/userMiddleware");

router.route("/signup").post(signupUser);
router.route("/login").patch(login);
router.route('/isUserExist').get(isUserExist);

module.exports = router;
