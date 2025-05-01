"use strict";
// console.log("02" > 1);

/*
 following is strange comparison. The reason for the strage behavior is
 an equality check == and comparisons > < >= <= work differently. 
 Comparison convert null to a number, treating it as 0. Thats why 
 null >= 0 is true
 null > 0 is false
*/
console.log ("***** null *****");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log ("***** undefined *****");
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// strict check (===l) not only check value but also the data type
console.log ("***** strict check *****");
console.log("02" === 2);
