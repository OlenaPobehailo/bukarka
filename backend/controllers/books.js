const { Book } = require("../models/book");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAll = async (req, res, next) => {
  const result = await Book.find();
  res.json(result);
};

const getBestsellers = async (req, res) => {
  const bestsellers = await Book.find({ bestsellers: true });
  res.json(bestsellers);
};

const getNewBooks = async (req, res) => {
  const newBooks = await Book.find({ new: true });
  res.json(newBooks);
};

const getPromotions = async (req, res) => {
  const promotions = await Book.find({ promotions: true });
  res.json(promotions);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getBestsellers: ctrlWrapper(getBestsellers),
  getNewBooks: ctrlWrapper(getNewBooks),
  getPromotions: ctrlWrapper(getPromotions),
};
