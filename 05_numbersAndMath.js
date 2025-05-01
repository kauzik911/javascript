"use strict";

// same like string number can be defined in two ways.
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// ******** Math
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));

console.log("**** Random");
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// find a value between 10 and 20
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);