"use strict";
let judge = require("../lib/Format");

describe('judge', () => {
    let result = judge("Ivy,2014,Y,03,Math:90,Chinese:90,English:90,Programming:90");
    let i =0;
    let expectResult = ["Ivy","2014","Y","03","Math:90","Chinese:90","English:90","Programming:90"];
    for(;i<result.length;i++){
        it('should display split imformation', () => {
            expect(result[i]).toBe(expectResult[i]);
        });
    }
   
    it('should be a array',()=>{
        expect(result instanceof Array).toBe(true);
    })

});