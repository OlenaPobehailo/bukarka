const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models/user");
const { HttpError } = require("../../../helpers");
const ctrlWrapper = require("../../../decorators/ctrlWrapper");
const { SECRET_KEY } = process.env;

const register = asyncHandler(async (req, res) => {
  const { name, surname, phone, email, password } = req.body;
  if (!name || !surname || !phone || !email || !password) {
    throw HttpError(400, "Please fill in all required fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw HttpError(409, "Email has already been registered");
  }

  const user = await User.create({
    name,
    surname,
    phone,
    email,
    password,
  });
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
  await User.findByIdAndUpdate(user._id, { token });
  if (user) {
    const { id, name, surname, email, phone, role, bookClub } = user;

    res.status(201).json({
      status: 201,
      message: "User registered succesfull",
      token,
      data: {
        id,
        name,
        surname,
        email,
        phone,
        role,
        bookClub,
      },
    });
  } else {
    throw HttpError(400, "Invalid user data");
  }
});

module.exports = ctrlWrapper(register);
