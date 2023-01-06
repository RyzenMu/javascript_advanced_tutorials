// export functions using export keyword

export function sum(a, b){
    //call multi() functi
    multi(a,b);
    console.log(a+b);

};



export let multi = (a, b) => {
    console.log(a * b);
};


// export {sum, multi};