const express = require("express");
const jsonPatch = require("../Controllers/jsonPatch");
const isAuthenticatedUser = require("../Middlewares/auth");
const router = express.Router();

router.route("/jsonPatch").get(isAuthenticatedUser,jsonPatch);
module.exports = router;
