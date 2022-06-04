const path = require("path");
const express = require("express");
const multer = require("multer");
const File = require("../../models/admin/file");
const Router = express.Router();

describe('Creating file upload',()=>{
    it.only('Should not upload a file when title is not given', ()=>{
        File.findOne = jest.fn().mockReturnValueOnce({
            title :"Marking Schema Image",
        });

        File.prototype.save = jest.fn().mockImplementation(()=>{});

        // await expect(create("Marking Schema Image","Test","Marking Rubric")).rejects.toThrowError();
    })
})
