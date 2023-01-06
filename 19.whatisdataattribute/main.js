// data attribute

let nav = document.querySelectorAll(".navbar");

console.log(nav[0].getAttribute("data-number"));
console.log(nav[1].getAttribute("data-number"));
console.log(nav[0].getAttribute("data-name"));
console.log(nav[1].getAttribute("data-name"));


// using dataset property
console.log(nav[0].dataset.number);
console.log(nav[1].dataset.number);
console.log(nav[0].dataset.name);
console.log(nav[1].dataset.name);


// class name property


let toggle = document.querySelector(".toggle");

//creating anonymous function

let color = function (flag){
    if (flag){
        toggle.className = "toggle_in";
    }
    else{
        toggle.className = "toggle_out";
    }
}

color(true);