const express = require("express");
const Creategroup = require("../../models/student/CreateGroup") 
const Findtopic = require("../../models/student/findTopic") 

const router = express.Router();

router.post("/", async(req,res)=>{
    //console.log(req.body)
    const data = new Findtopic(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Topic not selected!"
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "Topic selected Successfully....",
            data:result
        })
    }
})

//get records
router.get("/", async(req,res)=>{    
    try{
                             
        const result = await Findtopic.find(); 
       if(!result){
           res.json({
               status:"FAILED",
               message:"Not Found a Group"
           })
       }
       else{
           res.json({
               status:"SUCCESS",
               message:"Group Found",
               data:result
           })
       }
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router