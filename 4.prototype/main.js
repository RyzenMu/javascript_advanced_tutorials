// prototype

let ff = function(){
    // this.a = 1;
    this.b = 2;
};

console.log(ff);
console.log(ff.a);
console.log(ff.b);

// console.log(ff[a]);
// console.log(ff[b]);

let ffo = new ff();

// ffo.c = 3;
// ffo.d = 4;

// console.log(ffo.a);
// console.log(ffo.b);
// console.log(ffo.c);
// console.log(ffo.d);

ff.prototype.c = 5;
ff.prototype.d = 6;
ff.prototype.a = 6;



console.log(ffo.a);
console.log(ff.prototype);






