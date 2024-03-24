const { HttpError } = require("../helpers");

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(
        res
          .status(403)
          .json({ message: "You have not allowed permission to access" })
      );
    }
    next();
  };
};
module.exports = authorizeRoles;
