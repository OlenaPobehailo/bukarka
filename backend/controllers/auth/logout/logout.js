const asyncHandler = require("express-async-handler");
const ctrlWrapper = require("../../../decorators/ctrlWrapper");
const { User } = require("../../../models/user");

const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({ massage: "No Content" });
});
module.exports = ctrlWrapper(logout);
