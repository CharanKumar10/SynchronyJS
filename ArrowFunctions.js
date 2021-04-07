"use strict"

let data =[10,20,30];
//short form for anonymous function
data.forEach(element =>console.log(element););

//syntax for short form
//()=>{}
//() is option if called function has single parameter
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

calculator(2,3,(a,b)=>{return a+b});
calculator(2,3,(a,b)=>a+b);//single line so {} is optional & {} is not used single line becomes return value
//fat arrow function





function add(x,y,add){
    return add(x,y);
}

add(20,40,function(a,b){return a+b;});

add(20,40,(a,b)=>{a+b});
add(20,40,(a,b)=>a+b;);
