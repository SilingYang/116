"use strict";
function Calculate(student){
    let sum = 0;
    sum +=trans(student.语文);
    sum +=trans(student.数学);
    sum +=trans(student.英语);
    sum +=trans(student.编程);
    return sum;
}
function trans(score){
    let i =0;
    let j =0;
    let result = 0;
    while(i<score.length){
        j = 0;
        while(j!=score[i]){
            j++;
        }
        result = result*10+j;
        i++;
    }
    return result;
}
module.exports = Calculate;