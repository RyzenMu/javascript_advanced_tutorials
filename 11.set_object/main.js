// create a new set

const st = new Set([22, 33, 44, 55, 44, 55]);

console.log(st);

// adding elements to the set object

st.add(34);
st.add(35);
st.add(36);

console.log(st);

st.delete(36);

console.log(st);


st.clear()

console.log(st);

// adding object to set object
st.add({a : 1, b :2});

console.log(st);


// adding function to set object

st.add(function f1(){ console.log('Hi')});

// console.log(st);

st.forEach(function(x){
    console.log(x);
});

st.forEach(value => {
    console.log(value);
});
//has method

st.add(12);
console.log(st);
console.log(st.has(12));
console.log(st.has(13));

// iterating using for loop

for(let item of st){
    console.log(item);
}


// size method

console.log(st.size);

// arrow function in for each

st.forEach(value => {
    console.log(value);
});


// weak set

// call weakset constructor

const ws = new WeakSet();

let obj1 = {};
let obj2 = {};

ws.add(obj1);
ws.add(obj2);

console.log(ws);










































