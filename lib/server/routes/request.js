const express = require("express");
const router = express.Router();

const {
  checkAndSaveRequest,
  updateRequestStatus,
} = require("../controller/requestController");
const {} = require("");

router.route("/cheackandsave/request").post(checkAndSaveRequest);
router.route("/update/request/status").put(isLoggedIn, updateRequestStatus);
router.route("/get/my-request").get(getAllRequestSentByConsumer);
router.route("/get/foodpost/request").get(getAllRequestOnMyPost);

module.exports = router;
