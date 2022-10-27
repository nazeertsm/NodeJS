//string!=arrays

var greet = 'Hello';
var user = 'Lisa'

//console.log(greet.pop());

console.log( greet + user ); //Hello Lisa

console.log( greet.concat(user) ); //Hello Lisa


//To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:  
console.log(greet.charAt(0)); // 'H'

//The concat() method joins two strings:  
console.log("Wo".concat("rl").concat("d")); //world


//The indexOf returns the location of the first position that matches a character: 
console.log("ho-ho-ho".indexOf('h')); //0
console.log("ho-ho-ho".indexOf('o')); //1
console.log("ho-ho-ho".indexOf('-')); //2

//The lastIndexOf finds the last match, otherwise it works the same as indexOf.

//The split method chops up the string into an array of sub-strings:
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

//There are also some methods to change the casing of strings. For example:  

console.log(greet.toUpperCase()); // "HELLO, "
console.log(greet.toLowerCase()); // "hello, "