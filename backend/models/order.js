const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const orderSchema = new Schema(
  {
    orderItems: [
      {
        type: Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true,
      },
    ],

    status: {
      type: String,
      required: true,
      default: "Pending",
    },

    totalPrice: {
      type: Number,
      default: 0,
    },

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.post("save", handleMongooseError);

const Order = model("Order", orderSchema);

module.exports = { Order };
