// user.js
const Mongoose = require("mongoose");
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
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
});

const User = Mongoose.model("user", UserSchema);
module.exports = User;
