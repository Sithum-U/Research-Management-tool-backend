<<<<<<< HEAD
const User = require("../../models/auth/user");
const bcrypt = require("bcryptjs");
const router = require("express").Router();

router.post("/register", async(req,res)=>{
=======
const User = require("../../models/auth/user"); // importing user model based on mongoose schema
const bcrypt = require("bcryptjs");
// const router = require("./route");
const router = require("express").Router();

router.post("/register", async (req, res) => {
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
  const { username, password, phone, email, role } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      username,
      password: hash,
      phone,
      email,
      role,
    })
      .then((user) =>
        res.status(200).json({
          message: "User successfully created",
          user,
        })
      )
      .catch((error) =>
        res.status(400).json({
          message: "User not successful created",
          error: error.message,
        })
      );
  });
});
<<<<<<< HEAD

=======
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
// exports.register = async (req, res, next) => {
//   const { username, password, phone, email, role } = req.body;
//   if (password.length < 6) {
//     return res.status(400).json({ message: "Password less than 6 characters" });
//   }
//   bcrypt.hash(password, 10).then(async (hash) => {
//     await User.create({
//       username,
//       password: hash,
//       phone,
//       email,
//       role,
//     })
//       .then((user) =>
//         res.status(200).json({
//           message: "User successfully created",
//           user,
//         })
//       )
//       .catch((error) =>
//         res.status(400).json({
//           message: "User not successful created",
//           error: error.message,
//         })
//       );
//   });
// };

// exports.login = async (req, res, next) => {
<<<<<<< HEAD
//   const { username, password } = req.body;
=======
//   const { username, password } = req.body; //creating a new user object with the request body
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
//   // Check if username and password is provided
//   if (!username || !password) {
//     return res.status(400).json({
//       message: "Username or Password not present",
//     });
//   }
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       res.status(400).json({
//         message: "Login not successful",
//         error: "User not found",
//       });
//     } else {
//       // comparing given password with hashed password
//       bcrypt.compare(password, user.password).then(function (result) {
//         result
//           ? res.status(200).json({
//               message: "Login successful",
//               user,
//             })
//           : res.status(400).json({ message: "Login not succesful" });
//       });
//     }
//   } catch (error) {
//     res.status(400).json({
//       message: "An error occurred",
//       error: error.message,
//     });
//   }
// };

<<<<<<< HEAD
=======
// modify user
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
// exports.update = async (req, res, next) => {
//   const { role, id } = req.body;
//   // First - Verifying if role and id is presnt
//   if (role && id) {
//     // Second - Verifying if the value of role is admin
//     if (role === "admin") {
//       // Finds the user with the id
//       await User.findById(id)
//         .then((user) => {
//           // Third - Verifies the user is not an admin
//           if (user.role !== "admin") {
//             user.role = role;
//             user.save((err) => {
//               //Monogodb error checker
//               if (err) {
//                 res
//                   .status("400")
//                   .json({ message: "An error occurred", error: err.message });
//                 process.exit(1);
//               }
//               res.status("201").json({ message: "Update successful", user });
//             });
//           } else {
//             res.status(400).json({ message: "User is already an Admin" });
//           }
//         })
//         .catch((error) => {
//           res
//             .status(400)
//             .json({ message: "An error occurred", error: error.message });
//         });
//     } else {
//       res.status(400).json({
//         message: "Role is not admin",
//       });
//     }
//   } else {
//     res.status(400).json({ message: "Role or Id not present" });
//   }
// };

<<<<<<< HEAD
=======
// delete user
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
// exports.deleteUser = async (req, res, next) => {
//   const { id } = req.body;
//   await User.findById(id)
//     .then((user) => user.remove())
//     .then((user) =>
//       res.status(201).json({ message: "User successfully deleted", user })
//     )
//     .catch((error) =>
//       res
//         .status(400)
//         .json({ message: "An error occurred", error: error.message })
//     );
// };

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 67c505ece4d84b1fb98f49efc2762ac4726940c5
