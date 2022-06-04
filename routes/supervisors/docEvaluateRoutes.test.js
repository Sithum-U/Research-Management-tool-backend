const express = require("express");
const DocEvaluation = require("../../models/supervisors/docEvaluateModel");

describe('Evaluating documents',()=>{
    it.only('Should not create an evaluation document when student group is not given', async()=>{
        DocEvaluation.findOne = jest.fn().mockReturnValueOnce({
            studentGrp :"G44",
        });

        DocEvaluation.prototype.save = jest.fn().mockImplementation(()=>{});

         await expect(create("G44","G07","G08")).rejects.toThrowError();
    })
})
