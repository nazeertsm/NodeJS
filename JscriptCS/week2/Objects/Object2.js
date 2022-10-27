var house3 = {};
house3.rooms = 4;
house3.color = "pink";
house3.priceUSD = 12345;
console.log(house3);
console.log("-------------------------------------");

console.log("This alternative syntax is known as the brackets notation.");
//This alternative syntax is known as the brackets notation.
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

console.log("-------------------------------------");
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

