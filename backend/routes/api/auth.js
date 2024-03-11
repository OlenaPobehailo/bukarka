const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth/index");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewares");

router.post(
  "/register",
  validateBody(schemas.registerJoiSchema),
  ctrl.register
);
router.post("/login");
router.post("/logout");
router.get("/current");

module.exports = router;
