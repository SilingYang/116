"use strict";
let readlineSync = require('readline-sync');
function judge(information){
    let imformation = readlineSync.question("请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：");
    console.log(typeof imformation);
    let i = information.split(",");
    return i;
}
module.exports = judge;