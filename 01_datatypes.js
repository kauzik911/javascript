"use strict";

// alert(3 + 5) // we are using nodejs. not browser. There is a different way to write allert in node.js

/*
 Primitive Data type - Whenever you access this type of data you dont get the direct
 memory access. Rather they make a copy of the data and provide you the access
 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
 
 Non-primitive (Reference) - you get the access to the reference of variable in memoryl 
 Array, Objects, Function
 */

 const id = Symbol('123');
 const anotherId = Symbol('123');

 // even if the value same the symbol store them differently
console.log(id === anotherId);
console.log(id);
console.log(anotherId);


/**
 * ******* Memory
 * Stack (Primitive) and Heap (Non-Primitive)
 * 
 */