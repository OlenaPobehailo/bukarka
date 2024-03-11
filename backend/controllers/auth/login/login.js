const asyncHandler = require("express-async-handler");
const ctrlWrapper = require("../../../decorators/ctrlWrapper");
const { User } = require("../../../models/user");
const { HttpError } = require("../../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw HttpError(400, "Please fill in all required fields");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User does not exist");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
  await User.findByIdAndUpdate(user._id, { token });
  if (user && passwordCompare) {
    const { id, name, surname, email, phone, role, subscription } = user;

    res.status(200).json({
      status: 200,
      message: "Login successfull",
      token,
      data: {
        id,
        name,
        surname,
        email,
        phone,
        role,
        subscription,
      },
    });
  } else {
    throw HttpError(401, "Email or password invalid");
  }
});
module.exports = ctrlWrapper(login);
