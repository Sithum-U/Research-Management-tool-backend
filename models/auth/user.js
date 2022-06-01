// user.js
const Mongoose = require("mongoose");
<<<<<<< HEAD
=======
const validator = require("validator");
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
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
<<<<<<< HEAD
=======
    validate(value) {
      if (!validator.isStrongPassword(value))
        throw new Error("Password is invalid!!!");
    },
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
  },
  email: {
    type: String,
    required: true,
<<<<<<< HEAD
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true,
=======
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
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
});

const User = Mongoose.model("user", UserSchema);
module.exports = User;
