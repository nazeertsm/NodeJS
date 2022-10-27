var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

console.log(10 > 9 && 10 < 17);

console.log(true && true);


var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

var currentTime = 7;
console.log(true || false);

console.log(22 % 5); // 2


"inter" + "net" // "internet"
"note" + "book" // "notebook"

365 + " days" // "365 days"
12 + " months" // "12 months"


console.log(1 + "2");

var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


console.log(1 * 2 + 3)


var num = 10; // the value on the right is assigned to the variable name on the left
console.log(5 > 4 > 3); // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`