// user.js
const Mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
    validate(value) {
      if (!validator.isStrongPassword(value))
        throw new Error("Password is invalid!!!");
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid!!!");
    },
  },
  phone: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value, "si-LK", true))
        throw new Error("Phone number is invalid!!!");
    },
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
});

const User = Mongoose.model("user", UserSchema);
module.exports = User;
