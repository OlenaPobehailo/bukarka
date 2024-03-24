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

    isGuestOrder: {
      type: Boolean,
      default: true,
    },

    customerInfo: {
      name: {
        type: String,
        required: function () {
          return this.isModified("customerInfo");
        },
      },
      surname: {
        type: String,
        required: function () {
          return this.isModified("customerInfo");
        },
      },
      email: {
        type: String,
        required: function () {
          return this.isModified("customerInfo");
        },
      },
      phoneNumber: {
        type: String,
        required: function () {
          return this.isModified("customerInfo");
        },
      },
      city: {
        type: String,
        required: function () {
          return this.isModified("customerInfo");
        },
      },
      comment: {
        type: String,
        // default: "",
      },
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
