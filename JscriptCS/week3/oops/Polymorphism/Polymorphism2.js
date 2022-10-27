//If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. 
//I can also use the concat() method on two arrays. Here's the result: 
"abc".concat("def"); // 'abcdef'
console.log("abc".concat("def"));

//Consider using the + operator on two arrays with one member each:  
["abc"] + ["def"]; // ["abcdef"]
console.log(["abc"] + ["def"]);