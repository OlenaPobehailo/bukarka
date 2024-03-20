const { Book } = require("../models/book");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");
const { query } = require("express");
const { HttpError } = require("../helpers");

const getAll = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const data = await Book.find().skip(skip).limit(limit);
  const total = await Book.countDocuments();

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

const filtersBooks = async (req, res) => {
  const {
    promotions,
    bestsellers,
    title,
    category,
    subcategory,
    language,
    author,
    publisher,
    priceMin,
    priceMax,
    ratingMin,
    ratingMax,
    page = 1,
    limit = 12,
  } = req.query;
  const skip = (page - 1) * limit;

  const filters = {};
  if (title) {
    filters.title = { $regex: title, $options: "i" };
  }
  if (category) {
    filters.category = { $regex: category, $options: "i" };
  }
  if (subcategory) {
    filters.subcategory = { $regex: subcategory, $options: "i" };
  }
  if (language) {
    filters.language = { $regex: language, $options: "i" };
  }
  if (author) {
    filters.author = { $regex: author, $options: "i" };
  }
  if (publisher) {
    filters.publisher = { $regex: publisher, $options: "i" };
  }
  if (promotions) {
    filters.promotions = promotions;
  }
  if (bestsellers) {
    filters.bestsellers = bestsellers;
  }
  if (req.query.new) {
    filters.new = req.query.new;
  }
  if (priceMin || priceMax) {
    filters.price = {};
    if (priceMin) {
      filters.price.$gte = +priceMin;
    }
    if (priceMax) {
      filters.price.$lte = +priceMax;
    }
  }
  if (ratingMin || ratingMax) {
    filters.rating = {};
    if (ratingMin) {
      filters.rating.$gte = +ratingMin;
    }
    if (ratingMax) {
      filters.rating.$lte = +ratingMax;
    }
  }

  const books = await Book.find(filters).skip(skip).limit(limit);
  const total = await Book.countDocuments(filters);
  if (!books) {
    throw HttpError(404, "Books not found");
  }
  if (total === 0) {
    res.status(404).json({ massage: "Books not found" });
  }
  res.status(200).json({
    total,
    page,
    limit,
    books,
  });

const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    throw HttpError(404, `Book with id=${id} not found`);
  }
  res.json(book);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getBestsellers: ctrlWrapper(getBestsellers),
  getNewBooks: ctrlWrapper(getNewBooks),
  getPromotions: ctrlWrapper(getPromotions),
  filtersBooks: ctrlWrapper(filtersBooks),
  getBookById: ctrlWrapper(getBookById),
};
