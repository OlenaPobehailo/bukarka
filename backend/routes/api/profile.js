const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profile/index");
const { authenticate, validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.get("/", authenticate, profileController.getProfile);
router.put(
  "/edit",
  authenticate,
  validateBody(schemas.editUserJoiSchema),
  profileController.editProfile
);
router.get("/newsletter", authenticate, profileController.newsletter);
router.get(
  "/newsletter/activate/:activateToken",
  profileController.activateNewsleter
);
router.get("/orders");
router.get("/bonuses");

module.exports = router;
