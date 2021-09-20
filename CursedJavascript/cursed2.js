`use strict`; 


function countExclamationMarks(str) {
    return !eval(Array.from(str).filter(char => char === '!').join("") + "0") ? "even !'s" : "odd !'s";
}

console.log( countExclamationMarks("!!!"))
console.log( countExclamationMarks("!!!!"))


