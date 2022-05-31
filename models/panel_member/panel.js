const mongoose = require('mongoose')
const validator = require('validator')

const panelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    position:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:[true,"This email is already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("This email is not valid")
            }
        }
    }
})

const Panel = mongoose.model('Panel',panelSchema)
module.exports = Panel;