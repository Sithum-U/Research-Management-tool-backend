const mongoose = require('mongoose')
const validator = require('validator')

const panelMemberSchema = new mongoose.Schema({
    studentGroup:{
        type:String,
        required: true
    },
    feedback:{
        type:String,
        required:true
    },
    note:{
        type:String
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
    },
    status:{
        type:String,
        required:true
    }
})

const PanelMember = mongoose.model('PanelMember',panelMemberSchema)
module.exports = PanelMember;