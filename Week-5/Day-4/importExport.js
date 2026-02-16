// Exporting from a Module

// Use module.exports to export values (functions, objects, variables, etc.)

//  File math.js
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

// // Export multiple functions as an object
module.exports = {
  add,
  subtract
};

// Importing using require()

// Use require() to import the module in another file.
//  File app.js

 const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(10, 4)); // 6


// variable exporting-

const greet = (name) => `Hello, ${name}!`;
module.exports = greet;

const greet = require('./greet');
console.log(greet('Hiba')); // Hello, Hiba!

// In CommonJS we use module.exports to export and require() to import
//  This helps us organize code into reusable modules and Each file is its own module

// ES MODULES

// ES Modules use the import and export keywords, just like in browser JavaScript. They are officially supported in Node.js	

// math.mjs or math.js with "type": "module"
export function add(a, b) {
  return a + b;
}

export const name = "Math Utilities";

export default function multiply(a, b) {
  return a * b;
}
// app.mjs or app.js
import multiply, { add, name } from './math.js';

console.log(add(2, 3));        // 5
console.log(multiply(4, 5));   // 20
console.log(name);             // Math Utilities

// How to Enable ES Modules in Node.js:

// We have two options
// 1.Use .mjs file extensions

// 2.Or add this to package.json
   //"type": "module"
// Then we can use import/export syntax in .js files


// Difference between CommonJS and ES Modules

// CommonJS and ES Modules are two ways to import and export code in Node.js
// CommonJS uses require() to import and module.exports to export and it works in a synchronous (blocking) way and has been used in Node.js for a long time

// ES Modules use import and export keywords and they are asynchronous and follow modern JavaScript standards
// CommonJS is older, simpler, and still widely used
// ES Modules are newer, modern, and better when you want to write code that works both in Node.js and the browser.
