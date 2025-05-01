const name  = "kas";
const id = 123;

// variable interpolation
console.log(`my name ${name} and my id: ${id}`);

// Two ways to declare string. Both does the same. it store the string as object
const myName = new String("kaushik");
console.log(myName[0]);
// access any prototype within string object
console.log(myName.__proto__);

console.log(myName.length);

// This does not change the original value. As string is primitive data type
console.log(myName.toUpperCase());

// find charater at 2nd position
console.log(myName.charAt(2));

console.log(myName.indexOf('u'));

