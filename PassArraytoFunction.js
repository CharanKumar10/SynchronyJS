"use strict"
function add(a,b){

    let sum=a+b;
    return sum;
}
console.log(add(2,5));

function addAll(n){
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum=sum+n[i];
    }
    return sum;
}
let arr=[10,20,30];
//console.log(addAll(arr));



function addAll2(...n){//rest parameter ;; accepts any number of values
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum=sum+n[i];
    }
    return sum;
}

//console.log(addAll2(10,20,30));

console.log(addAll2(...arr));//spread parameter
console.log(addAll2(arr));