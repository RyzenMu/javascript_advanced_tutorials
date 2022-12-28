// example

class Model {
    constructor(){

    }
}

const obj1 = new Model();
const obj2 = new Model();
const obj3 = 5;


console.log(obj1 instanceof Model);
console.log(obj3 instanceof Model);

// example 2

class Modeel {
    constructor(Mno, Mname){
        this.number = Mno;
        this.name = Mname;
    }
    show(){
        console.log(this.name, this.number);
    }
}

const obj4 = new Modeel(123, 'Villupuram');

console.log(obj4.name);
console.log(obj4.number);
obj4.show()


