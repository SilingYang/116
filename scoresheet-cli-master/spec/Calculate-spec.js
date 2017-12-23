"use strict";
let Calculate = require("../lib/Calculate");

describe("Sum should be",()=>{

    it("student",()=>{
        let result = Calculate({"语文":"100","数学":"90","英语":"80","编程":"70"});
        expect(result).toBe(340);
    })
});