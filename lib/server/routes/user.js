const express = require("express");
const router = express.Router();

// routes
const { signupUser, login, isUserExist, getRequestWithinRadius,
	getPostsWithinRadius } = require("../controller/userController");

// Middlewares
const { isLoggedIn } = require("../middleware/userMiddleware");

router.route("/signup").post(signupUser);
router.route("/login").patch(login);
router.route('/isUserExist').get(isUserExist);
router.route('/notification/radius').get(isLoggedIn, getRequestWithinRadius);
router.route('/volunteer/posts/radius').get(isLoggedIn, getPostsWithinRadius);

module.exports = router;
