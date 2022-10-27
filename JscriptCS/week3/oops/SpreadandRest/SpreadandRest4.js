//Copy either an object or an array into a separate one
//Here's how to copy an object into a completely separate object, using the spread operator.

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

//The output is 201, 200.


//You can copy an array into a completely separate array, also using the spread operator, like this:

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

//['apples'] 'not' ['apples','pears']