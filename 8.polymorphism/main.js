// polymorphism

class Employee{
    constructor(name){
        this.name = name;
        this.age = 24;
    }
    employeeName(){
        console.log(`Employee name is ${this.name}`);
    }
}

//inheritance

class Member extends Employee{
    constructor(name, salary){
        super(name);
        this.name = name;
        this.salary = salary;
        this.age = 30;
    }
    employeeName(){
        console.log(`Employee Name ${this.name} and salary ${this.salary}`);
    }
}

const emp1 = new Employee('Muruga');

emp1.employeeName();

const emp2 = new Member('nantham', 25000);

emp2.employeeName();

console.log(emp2.age);


// string representation

//Object.toString();

const dt = new Date();

console.log(dt);
console.log(dt.toString());
console.log(typeof(dt));
console.log(typeof(dt.toString()));
