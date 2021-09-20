`use strict`;

countExclamationMarks = str =>
    !eval(
        Array
            .from(str)
            .filter(char => char === "!")
            .join("") + "0"
    )
    ? "even !'s"
    : "odd !'s"

console.log(countExclamationMarks("!!!"))
console.log(countExclamationMarks("!!!!"))


