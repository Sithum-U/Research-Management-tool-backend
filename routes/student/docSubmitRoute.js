const express = require("express");
const Docsubmit = require("../../models/student/docModel")  //model path name

const router = express.Router();

router.post("/", async(req,res)=>{
    //console.log(req.body)
    
    const data = new Docsubmit(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Document not Uploaded!"
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: " Document Uploaded Successfully....",
            data:result
        })
    }
})





module.exports = router