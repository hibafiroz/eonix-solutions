// //properties
// // 1.length
// const arr = [10, 20, 30];
// console.log(arr.length);  // 3
// //can expand length
// fruits.length = 2;
// console.log(fruits);  // Output: ["apple", "banana"]

// fruits.length = 5;
// console.log(fruits);  // Output: ["apple", "banana", undefined, undefined, undefined]

// // 2.constructor
// const arrr = [1, 2, 3];
// console.log(arrr.constructor);  

// // 3.prototype
// Array.prototype.sayHello = function() {
//   console.log("Hello from array!");
// };

// const numbers = [1, 2, 3];
// numbers.sayHello();  // Output: Hello from array!

// //array methods
// // 1.push
// const fruitss = ["apple", "banana"];
// fruitss.push("cherry");
// console.log(fruitss);  // ["apple", "banana", "cherry"]

// // 2.pop
// const fruitsss = ["apple", "banana", "cherry"];
// const last = fruitsss.pop();
// console.log(last);    // "cherry"
// console.log(fruitsss);  // ["apple", "banana"]

// // 3.shift(remove from begining)
// const fruits = ["apple", "banana", "cherry"];
// const first = fruits.shift();
// console.log(first);   // "apple"
// console.log(fruits);  // ["banana", "cherry"]

// // 4. unshift(add from begining)
// const fs = ["banana", "cherry"];
// fs.unshift("apple");
// console.log(fs);  // ["apple", "banana", "cherry"]

// //5.indexOf
// const frs = ["apple", "banana", "cherry"];
// console.log(frs.indexOf("banana"));  // 1
// console.log(frs.indexOf("grape"));   // -1 (not found)


// //6.slice
// const fru = ["apple", "banana", "cherry", "date"];
// const newFruits = fru.slice(1, 3);
// console.log(newFruits);  // ["banana", "cherry"]

// //7.splice
// const frui = ["apple", "banana", "cherry", "date"];
// // Remove 1 element at index 2, add "kiwi"
// fruits.splice(2, 1, "kiwi");
// console.log(frui);  // ["apple", "banana", "kiwi", "date"]

// //array iteration methods
// // 1.for each()
    // let a=[1,2,3,4,5]
    // let b=a.forEach((val,i,arr)=>{
    //   if(val%2===0)
    //     arr*2
     
    // })

    

    

// // 2.map()
// let number = [1, 2, 3];
// let doubled = number.map(function(numbers) {
//   return numbers * 2;
// });
// console.log(doubled); // [2, 4, 6]
// console.log(number)

// // 3.filter
// let o = [1, 2, 3, 4];

// let evenNumbers = o.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4]

// // 4.reduce
// let num=[1,2,3,4]
// let total = numbers.reduce(function(sum, number) {
//   return sum + number;
// }, 0);

// // 5.some
// let p = [4, 6, 8, 9, 11];
// let Prime = p.some(function(number) {
//   return isPrime(number)
// });
// console.log(Prime) // true, because 11 is prime

// // 6.every
// let nu = [2, 4, 6];
// let allEven = nu.every(function(number) {
//   return number % 2 === 0;
// });
// console.log(allEven); // true

7 //find
// let numbe = [3, 7, 10, 12];

// let firstEven = numbe.find((number)=>{
//   return isPrime(number);
// });

// console.log(firstEven); // 10

// // 8 findindex
// let numb = [5, 9, 12, 15];

// let index = numb.findIndex(function(number) {
//   return number%2===0;
// });

// console.log(index); // 2 (because 12 is the first number > 10)

// //String method
// // 1.slice
// let text = "Hello World";
// console.log(text.slice(0, 5)); // "Hello"


// // 2.indexof
// let k = "Hello World";
// console.log(k.indexOf('o'));    // 4
// console.log(k.indexOf('World')); // 6
// console.log(k.indexOf('x'));    // -1 (not found)

// // 3.endswith
// let l = "Hello World";

// console.log(l.endsWith("World")); // true
// console.log(l.endsWith("Hello")); // false
// console.log(l.endsWith("d"));

// // 4.startswith
// let m = "Hello World";

// console.log(m.startsWith("Hello")); // true
// console.log(m.startsWith("World")); // false

// // 5.tolowercase
// let z = "Hello World";
// console.log(z.toLowerCase()); // "hello world"

// // 6.touppercase
// let x = "Hello World";
// console.log(x.toUpperCase()); // "HELLO WORLD"

// //7.includes
// let c = "Hello World";

// console.log(c.includes("World")); // true
// console.log(c.includes("world")); // false (case-sensitive)

// //8.replace
// let v = "I like apples";
// console.log(v.replace("apples", "oranges")); // "I like oranges"

 //9.repeat
// let b = "Hi! ";
// console.log(b.repeat(3)); // "Hi! Hi! Hi! "

// //10.spilt
// let n = "Hello World";
// console.log(n.split(" ")); // ["Hello", "World"]

// //11. substring


// //numeric literals
// let age = 25;       // Integer
// let price = 19.99;  // Floating point number
// let temperature = -5; // Negative number

// //String Literal
// let name = "Aisha";
// let greeting = 'Hello!';

// //boolean
// let isStudent = true;
// let isLoggedIn = false;

// //null
// let data = null; //intentionally

// //undefined
// let result; //didnt assign
// console.log(result); // undefined

// //object
// let user = {
//   name: "Aisha",
//   age: 25
// };

// //array
// let colors = ["red", "green", "blue"];

// //function
// let greet = function() {
//   console.log("Hello!");
// };

// //regexp
// let pattern = /abc/;

