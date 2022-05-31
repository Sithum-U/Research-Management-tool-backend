const express = require("express");
const PanelMember = require("../../models/panel_member/panelMember") 

const router = express.Router();

router.post("/", async(req,res)=>{
    //console.log(req.body)
    const data = new PanelMember(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Please check the procedure.Feedback not Added!"
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
        const result = await PanelMember.find()
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
        const result = await PanelMember.findById(_id);
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
    PanelMember.findByIdAndUpdate(req.params.id)
      .then((panel) => {
        req.body.studentGroup ? (panel.studentGroup = req.body.studentGroup) : null,
          req.body.feedback
            ? (panel.feedback = req.body.feedback)
            : null,
          req.body.note ? (panel.note = req.body.note) : null,
          req.body.email ? (panel.email = req.body.email) : null,
          req.body.status ? ((panel.status = req.body.status)) : null;
          panel
          .save()
          .then((panel) => res.json({
                            status:"SUCCESS",
                            message:"Record is updated successfully",
                            data:panel
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
        const result = await PanelMember.findByIdAndDelete(_id);
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