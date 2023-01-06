// create focus event
console.log("Hello");

let form = document.getElementById("form");

// console.log(form);

console.log("Hello");

form.addEventListener("focus", function(event){
    //event target
    // console.log(event.target);
    event.target.style.background = "lightblue";

},
 true
);


// create blur event

form.addEventListener("blur", function(event){
    event.target.style.background = "white";

},
true
);