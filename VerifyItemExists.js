"use strict"
//function to verify if values exists in an array
let states = ["ap", "ka", "ts", "tn"];

states.forEach(i => {
    if (i == "ka") {
        console.log("ka exists in array");
    }
});

function verifyItemExists(array, state) {

    let statefound = false;//flagging
    for (let i = 0; i < array.length; i++) {
        if (array[i] == state) {
            statefound = true;
            break;
        }
    }
    return statefound;
}
console.log(verifyItemExists(states, "ka"));
console.log(verifyItemExists(states, "lla"));


console.log("v2" + verifyItem1(states, "tn"));