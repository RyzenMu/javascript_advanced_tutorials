// regular expression

// long syntax

// let reg = new RegExp("pattern", "flags");


// //short syntax

// let reg1 = /pattern/;

// let reg2 = /pattern/flags;


// for example

let str = "welcome to daily tution";

let reg = new RegExp("aily");
let reg1 = /aily/;

// call search method to find the expression

console.log(str.search(reg));
console.log(str.search(reg1));


//flags

let reg2 = /AI/i;
console.log(str.search(reg2));

//i- case sensitive
// g - global
//m - multi line search
//p - sticky


