var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

//To remove the last item from an array, I can use the pop() method:  
fruits.pop();
console.log(fruits); // ['apple']

console.log("-------------------------------------");
//I can now build a function that takes all its arguments and pushes them into an array, like this:
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder()

console.log("-------------------------------------");

//I can return it:
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']
console.log("-------------------------------------");