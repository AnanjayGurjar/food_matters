const express = require("express");
const router = express.Router();

const {
  checkAndSaveRequest,
  updateRequestStatus,
} = require("../controller/requestController");
const {} = require("");

router.route("/cheackandsave/request").post(checkAndSaveRequest);
router.route("/update/request/status").put(isLoggedIn, updateRequestStatus);
