const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profile/index");
const { validateBody } = require("../../middlewares");
const { emailJoiSchema } = require("../../models/newsletter");

router.post(
  "/subscribe",
  validateBody(emailJoiSchema),
  profileController.subscribe
);
router.get(
  "/subscribe/:subscribeToken",
  profileController.activateSubscription
);
router.get("/unsubscribe/:unsubscribeToken", profileController.unsubscribe);
module.exports = router;
