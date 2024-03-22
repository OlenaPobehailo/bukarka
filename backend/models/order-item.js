const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const orderItemSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderItemSchema.post("save", handleMongooseError);

const OrderItem = model("OrderItem", orderItemSchema);

module.exports = { OrderItem };
