

//create elements

let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");


p1.textContent = "Hello World";
p2.textContent = "Hello World 2 ";
p3.textContent = "Hello World 3 ";

//append child method

const content = document.querySelector(".content");

content.appendChild(p1);
content.appendChild(p2);

document.body.appendChild(p3);


// set attribute

p1.setAttribute("class", "paragraphhh-1");
p1.setAttribute("class", "paragraphhhhhhhhhhhhh-1");
p1.removeAttribute("class", "paragraphhhhhhhhhhhhh-1");



