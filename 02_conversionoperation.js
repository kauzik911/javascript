"use strict";

let score = "22vb";

console.log(typeof score);

console.log(typeof(score));

let valuInNumber = Number(score)
console.log(typeof valuInNumber);
console.log(valuInNumber);

/**
 * Change value of score and see the result of Number(score)
 * "33" => 33
 * "34avb"  => NaN
 * true => 1
 * ll
 */

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/**
 * Change value of isLoggedIn and see the result of Boolean(isLoggedIn)
 * 1 => true
 * 0 => false
 * "kas"  => true
 */