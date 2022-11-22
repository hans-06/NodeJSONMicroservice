const express = require("express");
const {
  registerUser,
  login,
  logOut,
} = require("../Controllers/userController");
const isAuthenticatedUser = require("../Middlewares/auth");

const router = express.Router();

router.route("/registeruser").post(registerUser);
router.route("/login").get(login);
router.route("/logout").get(isAuthenticatedUser, logOut);

module.exports = router;
