const register = require("./register/register");
const login = require("./login/login");
const logout = require("./logout/logout");
const current = require("./current/current");
const {
  forgotPassword,
  resetPassword,
} = require("./resetPassword/resetPassword");

module.exports = {
  register,
  login,
  logout,
  current,
  forgotPassword,
  resetPassword,
};
