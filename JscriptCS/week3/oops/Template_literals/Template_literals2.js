
let noMultiLine = "No multi-line strings in ES5"
console.log("Did you know? "+ noMultiLine);


let MultiLine = 
`multi-line 
strings are possible,
using backticks in  ES6`
;
console.log("Did you know? "+ MultiLine);


let first = `Hello`;
let second = `world'`;

console.log(`${first}-${second}`);