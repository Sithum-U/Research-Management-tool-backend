const mongoose = require('mongoose')
const validator = require('validator')

const presentationMarksSchema = new mongoose.Schema({
    studentGroup:{
        type:String,
        required: true
    },
    description:{
        type:String,
    },
    presentationSkills:{
        type:Number,
        required:true
    },
    correctness:{
        type:Number,
        required:true
    },
    content:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
    },
    overoll:{
        type:String
    }
})

const Presentation = mongoose.model('Presentation',presentationMarksSchema)
module.exports = Presentation;