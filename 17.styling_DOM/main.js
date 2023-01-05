// styling DOM

let h1 = document.getElementsByTagName("h1");
console.log(h1);

h1[0].innerHTML = "Styling with Dom";

h1[0].style.color = "blue";

let sub = document.querySelector('.submit');

sub.style.backgroundColor = "yellow";

sub.style.fontSize = '3em';

sub.style.color = "red";

sub.style.padding = "1.5em";

let sub_1 = document.querySelector(".sub");


sub_1.classList.add("submit1");


