"use strict"

let data =[10,20,30];
//short form for anonymous function
data.forEach(element =>console.log(element));

//syntax for short form is ()=>{}
//() is optional if called function has single parameter
//{} is optional if called function has single line
// this is called lambda expression
//used to simplify creating of the function containing single line
//if {} is not used single line becomes return value
function calculator(x,y,act){
    return act(x,y);
}

calculator(2,3,function(a,b){
    return a+b
});

console.log(calculator(2,3,(a,b)=>{return a+b}));

console.log(calculator(2,4,(a,b)=>a+b)); //single line so {} is optional & {} is not used single line becomes return value
//fat arrow function


function add(x,y,add){
    return add(x,y);
}

console.log(add(20,30,function(a,b){return a+b;})); 

console.log(add(20,40,(a,b)=>{return a+b})); 
console.log(add(20,50,(a,b)=>a+b)); //called function has single line
