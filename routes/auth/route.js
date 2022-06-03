const express = require("express");
const router = express.Router();
const {
  register,
  login,
  update,
  deleteUser,
  getUser,
  getUserById,
} = require("./auth");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").put(update);
router.route("/deleteUser/:id").delete(deleteUser);
router.route("/getUser").get(getUser);
router.route("/getUser/:id").get(getUserById);
module.exports = router;
