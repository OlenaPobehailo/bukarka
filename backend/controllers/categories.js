const { ctrlWrapper } = require("../decorators");
const Category = require("../models/category");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Помилка при отриманні категорій" });
  }
};

module.exports = {
  getAllCategories: ctrlWrapper(getAllCategories),
};
