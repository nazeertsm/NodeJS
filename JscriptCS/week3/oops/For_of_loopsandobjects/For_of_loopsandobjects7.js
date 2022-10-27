const car = {

    engine: true,
    steering: true,
    speed:"slow"

}

const sportCar = Object.create(car);

sportCar.speed = "fast";
console.log("The sports car object:", sportCar );

console.log('------------------for-in is unreliable-----');

for(prop in sportCar){

    console.log(prop);
}
console.log("Iterating over the object and its proto type");

console.log('------------------for-of is reliable-----');

for(prop of Object.keys(sportCar)){

    console.log(prop+ ": "+ sportCar[prop]);
}

console.log("Iterating over the object's OWN PROPERTIES only");