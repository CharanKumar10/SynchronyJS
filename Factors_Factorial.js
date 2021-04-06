"use strict"

//factor of a given number:20
console.log("Factors of a given number:20---While");

let n=1;
while (n<=20) {
    if(20%n==0){
        console.log(n);
    }
    n++;
}

console.log("Factors of a given number:20---For");
let n1=20;
for(let i=1;i<=n1;i++){
     if(n1%i==0){
        console.log(i);
    }
}
//factorial of given number :5
console.log("Factorial of a given number:5---For");
let num=1;
for(let k=1;k<=5;k++ ){
    num=num*k;  
}
console.log(num);