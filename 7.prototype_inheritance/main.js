// prototype inheritance

let car = {
    wheel : 4,
    model : "tesla",
    show(){
        console.log(`${this.wheel}, in ${this.model}`);
    }
};

let bike = {
    cc : 250,
};

let bicycle = {
    gear : 5,
    __proto__ : bike,
}

bike.__proto__ = car;

console.log(bike);

console.log(bike.cc);

console.log(bike.wheel);

console.log(bike.model);

bike.show();

console.log(bicycle.cc);

bicycle.show();