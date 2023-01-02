// polymorphism

class Employee{
    constructor(name){
        this.name = name;
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
    }
    employeeName(){
        console.log(`Employee Name ${this.name} and salary ${this.salary}`);
    }
}