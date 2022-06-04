const express = require("express");
const Creategroup = require("../../models/student/CreateGroup") 
const Findtopic = require("../../models/student/findTopic") 

describe('Creating groups ',()=>{
    it.only('Should send a request of reaserch topic when research topic is not given', async()=>{
        Creategroup.findOne = jest.fn().mockReturnValueOnce({
            researchTopic :"Javascript",
        });

        Findtopic.prototype.save = jest.fn().mockImplementation(()=>{});

         await expect(create("Javascript","PHP","Cucumber")).rejects.toThrowError();
    })
})