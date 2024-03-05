const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError, patterns } = require("../helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: patterns.email,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: [6, "Password must be up to 6 characters"],
      maxLength: [20, "Password must not be more then 20 characters"],
      required: [true, "Set password for user"],
    },
    role: {
      type: String,
      required: [true],
      default: "customer",
      enum: ["customer", "admin"],
    },
    avatarURL: {
      type: String,
      required: true,
    },
    subscription: {
      type: String,
      enum: ["beginner", "advanced", "pro"],
      default: "beginner",
    },
    phone: {
      type: String,
      default: "+380",
    },
    address: {
      type: Object,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);
module.exports = { User };
