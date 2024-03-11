const asyncHandler = require("express-async-handler");
const { HttpError } = require("../../../helpers");
const { sendEmail } = require("../../../servises/emailServise/emailServise");
const { BASE_URL } = process.env;

const sendResetPasswordEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      throw HttpError(400, "Bad request");
    }

    const send_to = email;
    const subject = "Відновлення паролю";
    const link = `href="${BASE_URL}/api/auth/reset-password"`;
    const message = `
    <div>
      <h1>Відновленни паролю</h1>
      <p>Для відновлення паролю перейдать за </p>
      <a href="${link}">посиланням</a>
    </div>
`;
    await sendEmail(send_to, subject, message);
    res.status(200).json({
      message: `Reset password link is sent to ${email}`,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
const resetPassword = asyncHandler(async (req, res) => {
  res.send("Reset password");
});
module.exports = { sendResetPasswordEmail, resetPassword };
