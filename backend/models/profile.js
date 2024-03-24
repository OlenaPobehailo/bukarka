const { Schema, model, default: mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const profileSchema = new Schema(
  {
    owner: {
      type: ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    activateNewsletterToken: String,
  },
  { versionKey: false, timestamps: true }
);
profileSchema.post("save", handleMongooseError);
const Profile = model("profile", profileSchema);
module.exports = { Profile };
