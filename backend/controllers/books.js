const { Book } = require("../models/book");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAll = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Book.find().skip(skip).limit(limit);
  res.json({ data: result });
};

const getBestsellers = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const bestsellers = await Book.find({ bestsellers: true })
    .skip(skip)
    .limit(limit);
  res.json({ data: bestsellers });
};

const getNewBooks = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const newBooks = await Book.find({ new: true }).skip(skip).limit(limit);
  res.json({ data: newBooks });
};

const getPromotions = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const promotions = await Book.find({ promotions: true })
    .skip(skip)
    .limit(limit);
  res.json({ data: promotions });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getBestsellers: ctrlWrapper(getBestsellers),
  getNewBooks: ctrlWrapper(getNewBooks),
  getPromotions: ctrlWrapper(getPromotions),
};
