const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const docSchema = new Schema({
  
  docUrl: {
    type: String,
  },
  
});

const Doc = mongoose.model("Doc", docSchema);

module.exports = Doc;
