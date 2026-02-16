//The spread operator is written as three dots ... and is used to "spread out" the elements of an array or object.
//in array
const fruits = ["apple", "banana"];
const moreFruits = [...fruits]; // Copying
console.log(moreFruits); // ["apple", "banana"]

//merging array
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]

//adding extra items
const numbers = [1, 2, 3];
const updated = [0, ...numbers, 4];
console.log(updated); // [0, 1, 2, 3, 4]

//spread in obj
const person = { name: "Alice", age: 25 };
const copiedPerson = { ...person };
console.log(copiedPerson); // { name: "Alice", age: 25 }

//merge obj
const info = { name: "Alice" };
const details = { age: 25, city: "NY" };
const merged = { ...info, ...details };
console.log(merged); // { name: "Alice", age: 25, city: "NY" }

//if keys same
const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };
const result = { ...obj1, ...obj2 };
console.log(result); // { name: "Bob" }

//spread  in function calls
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

//destructing
//Destructuring means breaking a complex structure (like an array or object) into smaller parts and assigning them to variables easily.
//array destructing
const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//skip items
const [first, , third] = [1, 2, 3];
console.log(first); // 1
console.log(third); // 3


//obj destructing
const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 25

//rename  variables
const person = { name: "Alice", age: 25 };
const { name: userName, age: userAge } = person;

console.log(userName); // Alice
console.log(userAge);  // 25

//default values
const { name, city = "Unknown" } = { name: "Bob" };
console.log(city); // "Unknown"

//nested destructing
const user = {         //nested obj
  name: "Jane",
  address: {
    city: "Paris",
    zip: "75000"
  }
};

const {                   //nested array
  address: { city, zip }
} = user;

console.log(city); // Paris

const colors = ["red", ["green", "blue"]];
const [primary, [secondary, tertiary]] = colors;

console.log(tertiary); // blue

//destructing function
function display([a, b]) {     //array params
  console.log(a, b);
}

display([5, 10]); // 5 10   

function greet({ name, age }) {      //obj params
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Alice", age: 30 }); // Hello Alice, age 30

// rest opearator
// The rest operator is used to collect multiple elements into a single array or object.

function greet(name, ...messages)  //function
  console.log('Name:', name);
  console.log('Messages:', messages);
}

greet('Hiba', 'Hello', 'Welcome!', 'Good Morning');

const numbers = [1, 2, 3, 4, 5];      //array
const [first, second, ...rest] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]

const user = {         //object
  name: 'Hiba',
  age: 21,
  city: 'Kochi'
};

const { name, ...rest } = user;

console.log(name); // Hiba
console.log(rest); // { age: 21, city: 'Kochi' }

//prototype and inheritence
// Every JavaScript object has a prototype, which is a reference to another object. If you try to access a property or method that doesn't exist on the object itself, JavaScript will look up the prototype chain to find it.
const person = {
  greet() {
    console.log('Hello!');
  }
};

const user = Object.create(person);
user.name = 'Hiba';

user.greet();  // Output: Hello!

// Inheritance allows one object or class to inherit properties and methods from another.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const hiba = new Person('Hiba');
hiba.sayHello(); // Output: Hi, I'm Hiba

class Person {     //prototype
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Student extends Person {     //class
  constructor(name, course) {
    super(name); // call parent constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const hiba = new Student('Hiba', 'Web Development');
hiba.greet();   // Inherited from Person
hiba.study();   // Defined in Student

//json
//JSON (JavaScript Object Notation) is a text format used to store and send data
//Convert JavaScript Object =JSON String
const user = {
  name: 'Hiba',
  age: 21,
  city: 'Kochi'
};

const jsonString = JSON.stringify(user);

console.log(jsonString);
// Output: {"name":"Hiba","age":21,"city":"Kochi"}

//Convert JSON String => JavaScript Object
const jsonString = '{"name":"Hiba","age":21,"city":"Kochi"}';

const user = JSON.parse(jsonString);

console.log(user.name); // Output: Hiba

//Shallow Copy
//A shallow copy copies only the top-level properties of an object.
const original = {
  name: 'Hiba',
  contact: {
    phone: 123
  }
};

const shallow = { ...original };  // Or Object.assign({}, original)

shallow.contact.phone = 999;

console.log(original.contact.phone); // Output: 999  (changed!)

//deep copy
//A deep copy clones everything, including nested objects
const original = {
  name: 'Hiba',
  contact: {
    phone: 123
  }
};

const deep = structuredClone(original);

deep.contact.phone = 999;

console.log(original.contact.phone); // Output: 123  (unchanged)

const original = {
  name: 'Hiba',
  contact: {
    phone: 123
  },
  date: new Date(),
  greet: () => 'Hello'  // This will be lost!
};

const deep = JSON.parse(JSON.stringify(original));

console.log(deep);
// Output: { name: 'Hiba', contact: { phone: 123 }, date: '2025-05-31T...Z' }

console.log(typeof deep.date); // string (not a real Date anymore)
console.log(deep.greet);       // undefined 

