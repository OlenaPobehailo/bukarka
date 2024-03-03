const { Book } = require("../models/book");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAll = async (req, res, next) => {
  const result = await Book.find();

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
