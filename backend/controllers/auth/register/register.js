const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../../../models/user");
const { HttpError } = require("../../../helpers");
const { SECRET_KEY } = process.env;

const register = asyncHandler(async (req, res) => {
  const { name, surname, phone, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw HttpError(409, "Email has already been registered");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    surname,
    phone,
    email,
    password: hashPassword,
  });
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });

  if (user) {
    const { name, surname, email, phone, role, subscription } = user;
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure: true,
      // sameSite: none,
    });
    res
      .status(201)
      .json({ token, name, surname, email, phone, role, subscription });
  } else {
    throw HttpError(400, "Invalid user data");
  }
});

module.exports = register;
