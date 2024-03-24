const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/auth/index");
const { schemas } = require("../../models/user");
const { validateBody, authenticate } = require("../../middlewares");

router.post(
  "/register",
  validateBody(schemas.registerJoiSchema),
  AuthController.register
);
router.post(
  "/login",
  validateBody(schemas.loginJoiSchema),
  AuthController.login
);
router.post("/logout", authenticate, AuthController.logout);
router.get("/current", authenticate, AuthController.current);

router.post("/password/forgot", AuthController.forgotPassword);
router.patch(
  "/password/reset/:resetToken",
  validateBody(schemas.resetPasswordJoiSchema),
  AuthController.resetPassword
);

module.exports = router;
