const { Schema, model, default: mongoose } = require("mongoose");
const { handleMongooseError, patterns } = require("../helpers");
const Joi = require("joi");

const emailJoiSchema = Joi.object({
  email: Joi.string().pattern(patterns.email).required(),
});
const newsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: patterns.email,
      trim: true,
    },
    subscribe: {
      type: Boolean,
      default: false,
    },
    subscribeToken: String,
    unsubscribeToken: String,
  },
  { versionKey: false, timestamps: true }
);
newsletterSchema.post("save", handleMongooseError);
const Newsletter = model("newsletter", newsletterSchema);
module.exports = { Newsletter, emailJoiSchema };
