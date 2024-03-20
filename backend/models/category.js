const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const categorySchema = new Schema(
  {
    title: { type: String, required: true },
    order: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

categorySchema.post("save", handleMongooseError);

const Category = model("Category", categorySchema);

module.exports = Category;
