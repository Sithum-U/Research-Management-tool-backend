//importing supervisor model based on mongoose schema
const express = require("express");
const Supervisor = require("../models/supervisors/supervisorModel");

const router = express.Router();

router.post("/add", (req, res) => {
    const newSupervisor = new Supervisor({
        supName: req.body.supName,
        supEmail: req.body.supEmail,
        supPassword: req.body.supPassword,
        supResearchField: req.body.supResearchField,
        supPhone: req.body.supPhone
    });
    supervisorSaved = newSupervisor.save();
    res.json(supervisorSaved);
})

router.get("/", (req, res) => {
    Supervisor.find((err, supervisors) => {
        if(err) {
            console.log(err);
        } else {
            res.send(supervisors);
        }   
    });
});

router.get("/:id", (req, res) => {
    Supervisor.findById(req.params.id)
        .then((supervisor) => res.json(supervisor))
        .catch((err) => res.json("Error: " + err));
});

router.get("/:researchField", (req, res) => {
    Supervisor.find({supResearchField: req.params.researchField})
        .then((supervisor) => res.json(supervisor))
        .catch((err) => res.json("Error: " + err));
});

router.put("/updateSupervisor/:id", (req, res) => {
    Supervisor.findByIdAndUpdate(req.params.id)
        .then((supervisor) => {
            req.body.supName ? (supervisor.supName = req.body.supName) : null,
            req.body.supEmail ? (supervisor.supEmail = req.body.supEmail) : null,
            req.body.supPassword ? (supervisor.supPassword = req.body.supPassword) : null,
            req.body.supResearchField ? (supervisor.supResearchField = req.body.supResearchField) : null,
            req.body.supPhone ? (supervisor.supPhone = req.body.supPhone) : null;
            
            supervisor
                .save()
                .then((supervisor) => res.json(supervisor))
                .catch((err) => res.json(err));
        })
        .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
    Supervisor.findByIdAndDelete(req.params.id)
        .then((supervisor) => res.json(supervisor.id))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;