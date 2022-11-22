const express = require("express");
const thumbnailGenerator = require("../Controllers/thumbnailGenerator");
const isAuthenticatedUser = require("../Middlewares/auth");
const router = express.Router();

router.route("/thumbnailGenerator").get(isAuthenticatedUser,thumbnailGenerator);
module.exports = router;
