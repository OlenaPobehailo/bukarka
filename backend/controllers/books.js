const { Book } = require("../models/book");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAll = async (req, res) => {
  const total = await Book.countDocuments();
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const data = await Book.find().skip(skip).limit(limit);
  res.json({
    total,
    page,
    limit,
    data,
  });
};

const getBestsellers = async (req, res) => {
  const total = await Book.countDocuments({ bestsellers: true });
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const data = await Book.find({ bestsellers: true }).skip(skip).limit(limit);
  res.json({
    total,
    page,
    limit,
    data,
  });
};

const getNewBooks = async (req, res) => {
  const total = await Book.countDocuments({ new: true });
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const data = await Book.find({ new: true }).skip(skip).limit(limit);
  res.json({
    total,
    page,
    limit,
    data,
  });
};

const getPromotions = async (req, res) => {
  const total = await Book.countDocuments({ promotions: true });
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  
  const data = await Book.find({ promotions: true }).skip(skip).limit(limit);
  res.json({
    total,
    page,
    limit,
    data,
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getBestsellers: ctrlWrapper(getBestsellers),
  getNewBooks: ctrlWrapper(getNewBooks),
  getPromotions: ctrlWrapper(getPromotions),
};
