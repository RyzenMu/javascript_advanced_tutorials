// object oriented programming

// empty object

const obj = {};

obj.name = "Ferrari";
obj.price = 40000;
obj.color = "red";
obj.wheels = 4;

for (let word in obj){
    console.log(obj[word]);
};

// creating property using reference

const o = obj;

o.gear = "automatic";
o.fuel = "electric";

for (let word in obj){
    console.log(obj[word]);
};