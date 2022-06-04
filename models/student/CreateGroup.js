const mongoose = require("mongoose");
const schema = mongoose.Schema;

const createSchema = new schema({
  groupName: {
    type: String,
    // required: true,
  },
  member1: {
    type: String,
    // required: true,
  },
  member2: {
    type: String,
    // required: true,
  },
  member3: {
    type: String,
    // required: true,
  },
  member4: {
    type: String,
    // required: true,
  },
  it1: {
    type: String,
    // required: true,
  },
  it2: {
    type: String,
    // required: true,
  },
  it3: {
    type: String,
    // required: true,
  },
  it4: {
    type: String,
    // required: true,
  },
  panelMember: {
    type: String,
  },
  feedback: {
    type: String,
  },
});

module.exports = creategroup = mongoose.model("creategroup", createSchema);
