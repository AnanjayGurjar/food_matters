const express = require("express");
const router = express.Router();

// routes
const { signupUser, login } = require("../controller/userController");

// Middlewares
const { isLoggedIn } = require("../middleware/userMiddleware");

router.route("/signup").post(signupUser);
router.route("/login").patch(login);

module.exports = router;
