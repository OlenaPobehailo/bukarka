const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const authenticate = asyncHandler(async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(res.status(401).json({ message: "Unauthorized" }));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(res.status(401).json({ message: "Unauthorized User" }));
    }
    req.user = user;
    next();
  } catch {
    next(res.status(401).json({ message: "Unauthorized User" }));
  }
});
module.exports = authenticate;
