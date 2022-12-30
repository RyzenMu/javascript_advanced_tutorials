// inheritance

class A1 {
    constructor(name, number){
        this.name = name;
        this.no = number;

    }
    show (){
        console.log(`my name is ${this.name}`);
        console.log(`my number is ${this.no}`);

    }
}

const obj = new A1('Virat', '18');

obj.show();


// create parent class person
class Person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
}

// create child class age
class Age extends Person {
    constructor(age){
        //call super method
        super('Harry', 'Dim');
        this.age = age;

    }
    showup(){
        console.log(this.fname + " " + this.lname);
        console.log(this.age);
    }
}


const d = new Age(23);
d.showup();

console.log(d.fname);
console.log(d.lname);


