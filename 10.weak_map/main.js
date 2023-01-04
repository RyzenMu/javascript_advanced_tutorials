// Weak Map

// declare object

let user = {
    name : "Daily"
};

console.log(user.name);

// user = null;

console.log(user.name);

//call weakmap constructor
let weakmap = new WeakMap();

let obj = {}, obj1 = {};

// set wealmap key and value

weakmap.set(obj, "Private");
weakmap.set(obj1, "Private Data");

//to get value
console.log(weakmap.get(obj));
console.log(weakmap.get(obj1));

for(let [key, value] of weakmap){
    console.log(key);
}

