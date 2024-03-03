const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const mongoose = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
  language: String,
  publisher: String,
  price: Number,
  rating: Number,
  category: String,
  subcategory: String,
  genre: String,
  format: String,
  cover: String,
  pages: Number,
  year: String,
});

bookSchema.post("save", handleMongooseError);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
