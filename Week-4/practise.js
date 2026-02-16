
// const obj = [
//   { key: 'Sample 1', data: 'Data1' },
//   { key: 'Sample 1', data: 'Data1' },
//   { key: 'Sample 2', data: 'Data2' },
//   { key: 'Sample 1', data: 'Data1' },
//   { key: 'Sample 3', data: 'Data1' },
//   { key: 'Sample 4', data: 'Data1' }
// ];

// const demo=obj.filter((val)=>{
//    return val.key==='Sample 1'&& val.data==='Data1'
// })
// console.log(demo)

// function computeAmount() {
//   let total = 0;

//   const obj = {
//     lacs(n) {
//       total += n * 100000;
//       return this;
//     },
//     crore(n) {
//       total += n * 10000000;
//       return this;
//     },
//     thousand(n) {
//       total += n * 1000;
//       return this;
//     },
//     value() {
//       return total;
//     }
//   };

//   return obj;
// }
// console.log(
//   computeAmount()
//     .lacs(15)
//     .crore(5)
//     .crore(2)
//     .lacs(20)
//     .thousand(45)
//     .crore(7)
//     .value()
// );

// var obj = {
//   helloWorld: function() {
//     return "hello world, " + this.name;
//   },
//   name: 'Hello'
// };

// var obj2 = {
//   helloWorld: obj.helloWorld,
//   name: 'Bye'
// };

// console.log(obj2.helloWorld()); 



// //3. this Binding and Call/Apply
// //Question: What will be the output of the following code? Explain why.
// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// const greetFunc = person.greet;
// greetFunc(); // What will this output?

// person.greet(); // What will this output?



// //4. Function Currying
// //Question: Implement a curry function that curries a function with multiple arguments.

// Example:

// function add(a, b, c) {
//   return a + b + c;
// }

// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3)); // Output: 6



// // 6. Closures and Private Variables
// //Question: Create a function that returns a counter object with increment and getValue methods. The counter should be private and not directly accessible from outside the object.

// Example:

// function createCounter() {
//   // Your code here
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // Output: 2



// //7. Array Destructuring and Spread Syntax
// //Question: Given an array, write a function that returns a new array with the first and last elements swapped, using destructuring and the spread syntax.

// Example:

// function swapFirstLast(arr) {
//   // Your code here
// }
// console.log(swapFirstLast([1, 2, 3, 4])); // Output: [4, 2, 3, 1]
// console.log(swapFirstLast([5, 6, 7, 8, 9])); // Output: [9, 6, 7, 8, 5]



// const data = [
//   { name: 'Hiba', city: 'Kochi' },
//   { name: 'Sara', city: 'Kochi' },
//   { name: 'Ali', city: 'Delhi' },
//   { name: 'Nora', city: 'Delhi' },
// ];
// // Expected Output:

// {
//   Kochi: [
//     { name: 'Hiba', city: 'Kochi' },
//     { name: 'Sara', city: 'Kochi' }
//   ],
//   Delhi: [
//     { name: 'Ali', city: 'Delhi' },
//     { name: 'Nora', city: 'Delhi' }
//   ]
//}



// const users = [
//   { id: 1, name: 'Hiba' },
//   { id: 2, name: 'Sara' },
//   { id: 1, name: 'Hiba' },
//   { id: 3, name: 'Ali' },
//   { id: 2, name: 'Sara' }
// ];
// //expected
// [
//   { id: 1, name: 'Hiba' },
//   { id: 2, name: 'Sara' },
//   { id: 3, name: 'Ali' }
// ]



//  const str = "aabbcddcef";
// //  Expected Output:
// // "e"
// // "e" is the first character that does not repeat in the string
// function duplicate(str){
//     return str.split('').find((val)=>{
//         return str.indexOf(val)===str.lastIndexOf(val)
//     })
// }
// console.log(duplicate(str))



// const sentence = "I am learning JavaScript every single day";
// function javas(sentence){
//     return sentence.split(' ').reduce((longest,current)=>{
//         return current.length>longest.length?current:longest;
//     })
// }
// console.log(javas(sentence))

let now=new Date()
console.log(now.getFullYear())