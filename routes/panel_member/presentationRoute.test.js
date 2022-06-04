const express = require("express");
const { default: isTaxID } = require("validator/lib/istaxid");
const Presentation = require("../../models/panel_member/presentation") 

describe('Creating presentation marks',()=>{
    it.only('Should not create a mark when studentGroup is not given', ()=>{
        Presentation.findOne = jest.fn().mockReturnValueOnce({
            studentGroup :"G110",
        });

        Presentation.prototype.save = jest.fn().mockImplementation(()=>{});

        // await expect(create("G06","G07","G08")).rejects.toThrowError();
    })
})
