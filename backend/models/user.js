const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { handleMongooseError, patterns } = require("../helpers");

const registerJoiSchema = Joi.object({
  name: Joi.string().pattern(patterns.name).required(),
  surname: Joi.string().pattern(patterns.name).required(),
  phone: Joi.string().pattern(patterns.phone).min(9).max(9).required(),
  email: Joi.string().pattern(patterns.email).required(),
  password: Joi.string().min(8).max(16).pattern(patterns.password).required(),
});
const loginJoiSchema = Joi.object({
  email: Joi.string().pattern(patterns.email).required(),
  password: Joi.string().min(8).max(16).pattern(patterns.password).required(),
});
const resetPasswordJoiSchema = Joi.object({
  password: Joi.string().min(8).max(16).pattern(patterns.password).required(),
  confirmPassword: Joi.string()
    .min(8)
    .max(16)
    .pattern(patterns.password)
    .required(),
});
const editUserJoiSchema = Joi.object({
  name: Joi.string().pattern(patterns.name).min(2).max(32),
  surname: Joi.string().pattern(patterns.name).min(2).max(32),
  birthDay: Joi.date(),
  phone: Joi.string().pattern(patterns.phone).min(9).max(9),
  email: Joi.string().pattern(patterns.email),
  oldPassword: Joi.string().min(8).max(16).pattern(patterns.password),
  newPassword: Joi.string().min(8).max(16).pattern(patterns.password),
  confirmNewPassword: Joi.string().min(8).max(16).pattern(patterns.password),
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
    birthDay: {
      type: String,
    },
    phone: {
      type: String,
      default: "+380",
      match: patterns.phone,
      minlength: [9, "Enter valid phone number"],
      maxLength: [9, "Enter valid phone number"],
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
    token: {
      type: String,
      default: "",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { versionKey: false, timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hashPassword = await bcrypt.hash(this.password, 10);
  this.password = hashPassword;
});

userSchema.post("save", handleMongooseError);

const schemas = {
  registerJoiSchema,
  loginJoiSchema,
  resetPasswordJoiSchema,
  editUserJoiSchema,
};

const User = model("user", userSchema);
module.exports = { User, schemas };
