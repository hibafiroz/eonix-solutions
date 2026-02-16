//var
var a=10;
var a=30;  //can redeclare
a=20;      //can reassign

for(var i=1;i<5;i++){   //var 
    setTimeout(()=>{
        console.log(i)
    },1000)
}  

//let
let x=10;
x=20;     //can reassign but cant redeclare

for(let i=1;i<5;i++){   //let
    setTimeout(()=>{
        console.log(i)
    },1000)
}  

//const
const z=10;  //no reassign and no redeclare

//data types
//primitive
let name = "Alice";       // String
let age = 25;             // Number
let isHappy = true;       // Boolean
let score = null;         // Null
let m;                    // Undefined
let bigNumber = 123n;     // BigInt
let uniqueId = Symbol();  // Symbol
//non primitive
let person = { name: "Alice", age: 25 };      // Object
let numbers = [1, 2, 3, 4];                   // Array
let greet = function() { console.log("Hi"); } // Function


console.log(true+1)  //0
console.log(undefined+1)  //NaN
console.log(NaN+1)  //NaN
console.log('5abc'-1)  //NaN
console.log(true-1)  //0
console.log(''+1)   //1
console.log([1,2]-1)   //nan
console.log([1,2]-1)  //1,21

//explicit
let str = "123";
let num = Number(str);      // Using Number()
console.log(num);           // 123 (number)

let num3 = parseInt("789"); // Using parseInt()
console.log(num3); 

//implicit
console.log(5 + "5"); // "55"
console.log("10" - 2); // 8
// Boolean in arithmetic = Number(true → 1, false → 0)
console.log(true + 1);   //2
console.log("5" == 5);

//arithmetic
let a = 10;
let b = 3;

console.log(a + b);  // 13   (addition)
console.log(a - b);  // 7  (subtraction)
console.log(a * b);  // 30   (multiplication)
console.log(a / b);  // 3.3333(division)
console.log(a % b);  // 1  (modulus - remainder)
console.log(++a);    // 11 (pre-increment)
console.log(b--);    // 3  (post-decrement, b becomes 2 after)

//comparison
let p = 5;
let y = "5";

console.log(p == y);   // true   (loose equality, compares value only)
console.log(p === y);  // false  (strict equality, compares value + type)
console.log(p != y);   // false
console.log(p !== y);  // true
console.log(p > 3);    // true
console.log(p < 10);   // true
console.log(p >= 5);   // true
console.log(p <= 4);   // false

//logical
let isAdmin = true;
let isLogggedIn = false;
console.log(isAdmin && isLogggedIn);  // false 
console.log(isAdmin || isLogggedIn);  // true  
console.log(!isAdmin);                // false


//ternary
let agee = 18;
let canVote = (agee >= 18) ? "Yes" : "No";
console.log(canVote);  // "Yes"

//typeOf
console.log(typeof 42);     // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);          // "object" (this is a JavaScript quirk)
console.log(typeof { name: "Bob" }); // "object"
console.log(typeof function(){});  // "function"

//nullish
let namee = null;
console.log(namee ?? "Default Name"); // "Default Name"

let count = 0;
console.log(count ?? 10); // 0 (because 0 is NOT null or undefined)

// OR
let username = "";
let defaultName = "Guest";

let uzer = username || defaultName;
console.log(uzer); // "Guest" because "" is falsy

//and
let isLoggedIn = true;
let hasPermission = false;
if (isLoggedIn && hasPermission) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// Output :Access denied because hasPermission is false


//if
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

//if else
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//if elseif
let o = 85;

if (o >= 90) {
  console.log("Grade A");
} else if (o >= 75) {
  console.log("Grade B");
} else if (o >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Ternary operator (short if-else)
let j = true;
let message = j ? "Welcome back!" : "Please log in.";
console.log(message);

//for
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}

//while
let i = 0;
while (i < 5) {
  console.log("Count:", i);
  i++;
}

//dowhile
let i = 0;
do {
  console.log("Do count:", i);
  i++;
} while (i < 5);

//for of loops
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

//for in loops
const a = { name: "Alice", age: 25, city: "NY" };
for (const key in a) {
  console.log(key + ":", a[key]);
}
