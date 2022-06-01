const mongoose = require("mongoose");
const schema = mongoose.Schema;

const docEvaluateSchema = new schema({
    studentGrp: {
        type: String,
        required: true
    },
    completness: {
        type: Number,
        required:true
    },
    corectness: {
        type: Number,
        required: true
    },
    plagiarism: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    comments: {
        type:String
    }
});

const DocEvaluation = mongoose.model("documentEvaluations", docEvaluateSchema);
module.exports = DocEvaluation;