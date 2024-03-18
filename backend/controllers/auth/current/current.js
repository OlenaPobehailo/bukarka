const asyncHandler = require("express-async-handler");
const ctrlWrapper = require("../../../decorators/ctrlWrapper");
const { User } = require("../../../models/user");
const { HttpError } = require("../../../helpers");

const current = asyncHandler(async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id).select("-password");
  if (user) {
    const { id, name, surname, email, phone, role, subscription } = user;
    res
      .status(200)
      .json({ data: { id, name, surname, email, phone, role, subscription } });
  } else {
    throw HttpError(404, "User not found");
  }
  res.send("Current User");
});
module.exports = ctrlWrapper(current);
