// Document methods

// Query selector ()

// Query selector all()


// let para = document.querySelector(".para");
let para = document.querySelector("p");

console.log(para);

para.innerHTML = "Paragraph";

let para1 = document.querySelector("#para1");

para1.innerHTML = "Another Paragraph";

console.log(para1);

let para2 = document.querySelector(".para-last");

console.log(para2);

para2.innerHTML = "last paragraph";


//Query selector All()

most_para = document.querySelectorAll(".p1");
console.log(most_para);

for(let i = 0 ; i<=6; i++){
    most_para[i].innerHTML = "qsa";
}


