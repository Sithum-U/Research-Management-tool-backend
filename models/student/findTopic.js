// user.js
const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
  reserchField: {
    type: String,
    
  },
  reserchTopic: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
  
  },
  
});

const Find = Mongoose.model("findTopic", UserSchema);
module.exports = Find;
