"use strict";
let sinon = require("sinon");
let InputInfo = require("../lib/InputInfo");

describe('InputInfo()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        InputInfo();
        expect(console.log.args.join()).toBe(`请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：`);
    });
});