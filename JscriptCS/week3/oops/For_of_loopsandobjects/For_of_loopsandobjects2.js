/*The Object.keys() method
The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. 
It's still too early to explain how you'll loop over the object itself; for now,
focus on the returned array of properties when you call the Object.keys() method.
Here's an example of running the Object.keys() method on a brand new car2 object:
*/

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']