// EXCEPTON HANDLING

//syntax

try{
    //statements
}
catch(arg){
    //statements
}

// example

try{
    coole.log('try block')
}
catch(e){
    console.log(`catch block ${e}`)
}

// try{
//     coole.log('try block')
// ]]]]]]]]]]]]
// }
// catch(e){
//     console.log(`catch block ${e}`)
// }


try{
    coole.log('try block')
}
catch(e){
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);

}
finally{ // finally block always runs
    console.log('Complted');
}
