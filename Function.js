"use strict"

function findOdd(n) {

    if (n % 2 != 0) {
        console.log(n + " is odd number");

    }
    else {
        console.log(n + " is even number");
    }
}

findOdd(10);

function findFactorial(n) {
    let num = 1;
    for (let k = 1; k <= 5; k++) {
        num = num * k;
    }
    console.log(num);
}

findFactorial(10);
