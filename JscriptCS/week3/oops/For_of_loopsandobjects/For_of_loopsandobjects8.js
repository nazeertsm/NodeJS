const car = {

   engine: true,
   

}

const sportCar = Object.create(car);

sportCar.speed = "fast";
console.log("The sports car object:", sportCar );

for(prop in sportCar){

    console.log(prop);
}


console.log("------------------------------");

for(prop of Object.keys(sportCar)){

    console.log(prop+ ": "+ sportCar[prop]);
}

