"use strict" 

let den=[2000,500,200,100,50,20,10,5,2,1];
let amount=9999;
console.log("Requested Amount:"+amount+"\n");


for(let i=0;i<den.length;i++){
	
	let Q=parseInt(amount/den[i]);
	console.log(den[i]+"X"+Q);
	amount=amount%den[i];
	//console.log("Remaining Amount: "+amount);
}