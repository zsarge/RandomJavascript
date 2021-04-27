/* 
 * Counting Vowels - Two Ways
 * Zack Sargent, April 26th, 2021
 * Node v15.5.0
 */

// Imperative Way:
function countVowels1(string) {
    let totalVowels = 0;
    for (const char of string.toLowerCase()) {
        switch (char) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                totalVowels++;
                break;
            default:
                break;
        }
    }
    return totalVowels;
}

// Functional Way:
countVowels2 = string =>
    Array.from(string.toLowerCase())
         .filter(char => "aeiou".includes(char))
         .length

// Tests:
const testStrings = ["\t", "Hello World!", "Green Table", "eeeeeEe", "eeeeeAe" ];

for (const test of testStrings) {
    const v1 = countVowels1(test);
    const v2 = countVowels2(test);
    console.log(`String: ${test} \tResult: ${v1} \tWorked: ${v1 === v2}`);
}

