const express = require("express");
const DocEvaluation = require("../../models/supervisors/docEvaluateModel");

const router = express.Router();

router.post("/add", (req, res) => {
    const newDocEvaluation = new DocEvaluation(req.body);
    newDocEvaluation.save()
        .then((evaluation) => res.json(evaluation))
        .catch((err) => res.json(err));
})

router.get("/", (req, res) => {
    DocEvaluation.find((err, evaluation) => {
        if(err) {
            console.log(err);
        } else {
            res.send(evaluation);
        }   
    });
});

router.get("/:id", (req, res) => {
    DocEvaluation.findById(req.params.id)
        .then((evaluation) => res.json(evaluation))
        .catch((err) => res.json("Error: " + err));
});

router.put("/updateDocEvaluation/:id", (req, res) => {
    DocEvaluation.findByIdAndUpdate(req.params.id)
        .then((evaluation) => {
            req.body.studentGrp ? (evaluation.studentGrp = req.body.studentGrp) : null,
            req.body.completness ? Number(evaluation.completness = req.body.completness) : null,
            req.body.corectness ? Number(evaluation.corectness = req.body.corectness) : null,
            req.body.plagiarism ? (evaluation.plagiarism = req.body.plagiarism) : null,
            req.body.total ? Number(evaluation.total = req.body.total) : null,
            req.body.comments ? (evaluation.comments = req.body.comments) : null;
            
            evaluation
                .save()
                .then((evaluation) => res.json(evaluation))
                .catch((err) => res.json(err));
        })
        .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
    DocEvaluation.findByIdAndDelete(req.params.id)
        .then((evaluation) => res.json(evaluation.id))
        // .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;