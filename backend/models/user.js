const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError, patterns } = require("../helpers");

const registerJoiSchema = Joi.object({
  name: Joi.string().pattern(patterns.name).required(),
  surname: Joi.string().pattern(patterns.name).required(),
  phone: Joi.string().min(9).max(9).required(),
  email: Joi.string().pattern(patterns.email).required(),
  password: Joi.string().min(8).max(16).pattern(patterns.password).required(),
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
      match: patterns.name,
      minlength: [2, "Name must be at list 2 characters"],
      maxLength: [32, "Name must not be more then 32 characters"],
    },
    surname: {
      type: String,
      match: patterns.name,
      required: [true, "Set surname for user"],
      minlength: [2, "Surname must be at list 2 characters"],
      maxLength: [32, "Surname must not be more then 32 characters"],
    },
    phone: {
      type: String,
      default: "+380",
      minlength: [9, "Enter valid number"],
      maxLength: [9, "Enter valid number"],
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
      required: [true, "Password is required"],
      match: patterns.password,
      minlength: [8, "Password must be at list 8 characters"],
    },
    role: {
      type: String,
      required: [true],
      default: "customer",
      enum: ["customer", "admin"],
    },
    subscription: {
      type: String,
      enum: ["beginner", "club"],
      default: "beginner",
    },
    address: {
      type: Object,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const schemas = {
  registerJoiSchema,
};
const User = model("user", userSchema);
module.exports = { User, schemas };
