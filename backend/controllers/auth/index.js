const register = require("./register/register");
const login = require("./login/login");
const logout = require("./logout/logout");
const current = require("./current/current");
const { resetPassword } = require("./resetPassword/resetPassword");
const { sendResetPasswordEmail } = require("./resetPassword/resetPassword");
module.exports = {
  register,
  login,
  logout,
  current,
  resetPassword,
  sendResetPasswordEmail,
};
