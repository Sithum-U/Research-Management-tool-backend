const express = require("express");
const Presentation = require("../../models/panel_member/presentation") 

const router = express.Router();

router.post("/", async(req,res)=>{
    //console.log(req.body)
    const data = new Presentation(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Please check the procedure.Presentation Marks not Added!"
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "Feedback Added Successfully....",
            data:result
        })
    }
})

//get records
router.get("/", async(req,res)=>{
     try{
        const result = await Presentation.find()
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not Found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Result Found",
                data:result
            })
        }
     }
     catch(e){
         console.log(e)
     }
})

//get single record
router.get("/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await Presentation.findById(_id);
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not Found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"One Result Found",
                data:result
            })
        }
     }
     catch(e){
         console.log(e)
     }
})

//update record
router.put("/:id", async(req,res)=>{
    Presentation.findByIdAndUpdate(req.params.id)
      .then((presentation) => {
        req.body.studentGroup ? (presentation.studentGroup = req.body.studentGroup) : null,
          req.body.description
            ? (presentation.description = req.body.description)
            : null,
          req.body.presentationSkills ? Number(presentation.presentationSkills = req.body.presentationSkills) : null,
          req.body.correctness ? Number(presentation.correctness = req.body.correctness) : null,
          req.body.content ? Number((presentation.content = req.body.content)) : null,
          req.body.total ? Number(presentation.total = req.body.total) : null,
          req.body.overoll ? (presentation.overoll = req.body.overoll) : null,
          presentation
          .save()
          .then((presentation) => res.json({
                            status:"SUCCESS",
                            message:"Record is updated successfully",
                            data:presentation
                        }))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json({
                        status:"FAILED",
                        message:"Record is not updated successfully"
                    }));
  });

//delete record
router.delete("/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await Presentation.findByIdAndDelete(_id);
        if(!result){
            res.json({
                status:"FAILED",
                message:"Record is not Deleted successfully"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Record is Deleted successfully",
                data:result
            })
        }
     }
     catch(e){
         console.log(e)
     }
})

module.exports = router