"use strict"
//function to return odd numbers between a range

function oddNumRange(l,r){
    let oddNum=[];
    for(let i=l;i<=r;i++){
        if(i%2==1){
            oddNum.push(i);
        }
    }
    return oddNum; 
}
let result=oddNumRange(10,50);
console.log(result);
