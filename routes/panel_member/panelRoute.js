const express = require("express");
const Panel = require("../../models/panel_member/panel") 

const router = express.Router();

router.post("/", async(req,res)=>{
    //console.log(req.body)
    const data = new Panel(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Registration Not Successfull!"
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "Panel Member Registered....",
            data:result
        })
    }
})

//get records
router.get("/", async(req,res)=>{
    try{
       const result = await Panel.find()
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

//update record
router.put("/:id", async(req,res)=>{
    Panel.findByIdAndUpdate(req.params.id)
      .then((panel) => {
        req.body.name ? (panel.name = req.body.name) : null,
          req.body.position
            ? (panel.position = req.body.position)
            : null,
          req.body.mobile ? (panel.mobile = req.body.mobile) : null,
          req.body.email ? (panel.email = req.body.email) : null;
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
        const result = await Panel.findByIdAndDelete(_id);
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