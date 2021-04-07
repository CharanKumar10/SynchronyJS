"use strict"
let fn=function(){

    console.log("AnonymousFunction");
}
fn();

//call back
function calculator(x,y,act){
    act(x,y);
}

calculator(10,20,function(a,b){console.log(a+b);})

let array=[10,20,30]

console.log("From for of loop");

//advanced for loop---"for of"
for (let i of array) {
    console.log(i);
    
}

console.log("From for each internal loop");
//for each internal loop
array.forEach(function(v) {
        console.log(v);
        
});