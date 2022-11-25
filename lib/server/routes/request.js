const express = require("express");
const router = express.Router();

const { checkAndSaveRequest } = require("../controller/requestController");

router.route("/cheackandsave/request").post(checkAndSaveRequest);
