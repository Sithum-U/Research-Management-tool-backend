const mongoose = require("mongoose");
const validator = require("validator");
const schema = mongoose.Schema;

const supervisorSchema = new schema({
    supName: {
        type: String,
        required: true
    },
    supEmail: {
        type: String,
        required: true,
        unique: [true, "THis email is already exists"],
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) throw new Error("Email is invalid...!");
        }
    },
    supPassword: {
        type: String,
        required: true,
        minlength: 6
    },
    supResearchField: {
        type: String,
        required: true,
    },
    supPhone: {
        type: String,
        required: true,
        validate(value) {
          if (!validator.isMobilePhone(value, "si-LK", true))
            throw new Error("Phone number is invalid!!!");
        }
    }
});

const Supervisor = mongoose.model("supervisor", supervisorSchema);
module.exports = Supervisor;