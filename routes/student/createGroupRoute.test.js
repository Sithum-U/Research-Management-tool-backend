const express = require("express");
const Creategroup = require("../../models/student/CreateGroup")

describe('Creating groups ',()=>{
    it.only('Should not create a create group when studentGroup is not given', async()=>{
        Creategroup.findOne = jest.fn().mockReturnValueOnce({
            member1 :"Buddini",
        });

        Creategroup.prototype.save = jest.fn().mockImplementation(()=>{});

         await expect(create("Buddini","Kalum","Sathma")).rejects.toThrowError();
    })
})