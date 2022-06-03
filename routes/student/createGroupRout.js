const express = require("express");
const Creategroup = require("../../models/student/CreateGroup")  //model path name

const router = express.Router();

router.post("/", async(req,res)=>{
    //console.log(req.body)
    
    const data = new Creategroup(req.body)   
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Student Group not created!"
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "Student group Created Successfully....",
            data:result
        })
    }
})


//get records
router.get("/", async(req,res)=>{    
    try{
                             
        const result = await Creategroup.find(); 
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
//get records
router.get("/:id", async(req,res)=>{    
    try{
        const _id = req.params.id;                      
        const result = await Creategroup.findById(_id); 
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

//update record
router.put("/updategroup/:id", async(req,res)=>{
    Creategroup.findByIdAndUpdate(req.params.id)
      .then((Creategroup) => {

          req.body.groupName ? (Creategroup.groupName = req.body.groupName) : null,
          req.body.member1 ? (Creategroup.member1 = req.body.member1) : null,
          req.body.member2 ? (Creategroup.member2 = req.body.member2) : null,
          req.body.member3 ? (Creategroup.member3 = req.body.member3) : null,
          req.body.member4 ? (Creategroup.member4 = req.body.member4) : null,
          req.body.it1 ? (Creategroup.it1 = req.body.it1) : null,
          req.body.it2 ? (Creategroup.it2 = req.body.it2) : null,
          req.body.it3 ? (Creategroup.it3 = req.body.it3) : null,
          req.body.it4 ? (Creategroup.it4 = req.body.it4) : null,
          Creategroup
          .save()
          .then((Creategroup) => res.json({
                            status:"SUCCESS",
                            message:"Student Group is updated successfully",
                            data:Creategroup
                        }))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json({
                        status:"FAILED",
                        message:"Student Group is not updated successfully"
                    }));
  });

  //delete record
router.delete("/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await Creategroup.findByIdAndDelete(_id);
        if(!result){
            res.json({
                status:"FAILED",
                message:"Student Group is not Deleted successfully"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Student Group Deleted successfully",
                data:result
            })
        }
     }
     catch(e){
         console.log(e)
     }
})


module.exports = router