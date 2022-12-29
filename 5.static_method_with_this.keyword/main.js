// static method

// static method cannot be called on a instance of a class

// example

class StaticClassMethod {
    static oncall(){
        return "this is a static method";
    }
    constructor (){
        console.log(StaticClassMethod.oncall(), StaticClassMethod.oncall());
        console.log(this.constructor.oncall());
    }
    static oncall2(){
        return `${this.oncall()} from call2 function`
    }
}


let stob = new StaticClassMethod();

console.log(typeof(stob));

console.log(StaticClassMethod.oncall());

console.log(StaticClassMethod.oncall2());