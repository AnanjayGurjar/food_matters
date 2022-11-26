require("dotenv").config();
var bodyParser = require("body-parser");
const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

// parse application/json
app.use(bodyParser.json({ limit: "50mb" }));

const user = require("./routes/user");
const food = require("./routes/food");
const request = require("./routes/request");
const connection = require("./routes/connectionRoute");
const socket = require("./routes/socket_route");

app.use("/api/v1", user);
app.use("/api/v1", food);
app.use("/api/v1", request);
app.user("/api/v1", connection);
app.use("/api/v1", socket);

module.exports = app;
