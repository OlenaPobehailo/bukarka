const asyncHandler = require("express-async-handler");
const { HttpError } = require("../../../helpers");
const crypto = require("crypto");
const { User } = require("../../../models/user");
const getResetPasswordTemplate = require("../../../utils/emailTemplates");
const { sendEmail } = require("../../../servises/emailServise/emailServise");
const { BASE_URL } = process.env;

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "Bad request");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User does not exist");
  }

  const resetPasswordToken = crypto.randomBytes(32).toString("hex");
  const resetPasswordExpire = Date.now() + 30 * 60 * 1000;
  await User.findByIdAndUpdate(user._id, {
    resetPasswordToken,
    resetPasswordExpire,
  });
  const resetUrl = `${BASE_URL}/api/auth/password/reset/${resetPasswordToken}`;
  const message = getResetPasswordTemplate(user?.name, resetUrl);

  try {
    await sendEmail({
      email: user.email,
      subject: "Відновлення паролю",
      message,
    });
    res.status(200).json({
      message: `Reset password instruction was sent to your email: ${email}!`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return res.status(500).json(error.message);
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { resetToken } = req.params;
  const { password, confirmPassword } = req.body;

  const user = await User.findOne({
    resetPasswordToken: resetToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  if (password !== confirmPassword) {
    throw HttpError(400, "Password does not match ");
  }
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res
    .status(200)
    .json({ message: "Password reset success" })
    .redirect(`${BASE_URL}/login`);
});

module.exports = { forgotPassword, resetPassword };
