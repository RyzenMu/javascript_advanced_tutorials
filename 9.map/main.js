// Maps

// example

const list_1 = [1, 2, 3, 4];

const my_map_1 = list_1.map(x => x * x +3);

console.log(list_1);
console.log(my_map_1);


// examplez

const myMaps = new Map();

// create three variables

let keyString = "Key String ",
keyObj = {},
keyFunc = function(){};

// Assigning values to my maps

myMaps.set(keyString, "Key String Value");
myMaps.set(keyObj, "Key Object Value");
myMaps.set(keyFunc, "Key Function Value");

console.log(myMaps);
console.log(myMaps.size);

console.log(myMaps.get(keyString));
console.log(myMaps.get(keyObj));
console.log(myMaps.get(keyFunc));

// set NaN as a key

myMaps.set(NaN, "Not a Number");
console.log(myMaps.get(NaN));

for (let [key, value] of myMaps){
    console.log(`for loop ${key},,,${value}`);
}

// example 3

const newMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

//iterate through new map array using for Each

newMap.forEach(function(value, key){
    console.log(key);
    console.log(value);
})















