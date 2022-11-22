const bodyParser = require("body-parser");
const express = require("express");
const user = require("./Routes/userRoute");
const jsonPatch = require("./Routes/jsonPatchRoutes");
const thumbnailGenerator = require("./Routes/thumnailGeneratorRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use(cookieParser());

app.use("/api/v1", user);
app.use("/api/v1", jsonPatch);
app.use("/api/v1", thumbnailGenerator);

module.exports = app;
