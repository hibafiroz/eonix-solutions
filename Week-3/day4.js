//store collections of key-value pairs, where each key is a string (or symbol), and each value can be any data type
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

//shorthand method
const person = {        
  name: "Alice",
  greet: function() {    //regular function
      console.log("Hello!");
  }
};

const person = {
  name: "Alice",
  greet() {               //shorthand way
    console.log("Hello!");
  }
};

const calculator = {
  add(a, b) {             //with parameters
    return a + b;
  }
};

console.log(calculator.add(2, 3)); // Output: 5


let person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, I'm " +this.name);//this keyword is used to access name in object
  }
};
person.greet(); // Output: Hello, I'm Alice

//built in 
//objkey
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); // ["name", "age"]

//obj value
console.log(Object.values(user)); // ["Alice", 25]

//obj entries
console.log(Object.entries(user));
// [["name", "Alice"], ["age", 25]]

//Object.hasOwnProperty
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("email")); // false

//constructor function
 //for creating multiple objects with the same structure 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);   //creting multiple objects
const person2 = new Person("Bob", 30);

console.log(person1.name); // Alice
console.log(person2.age);  // 30

//add methods to constructor
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice

//in operator
  //The in operator checks whether a key/property exists in an object 
  const person = {
  name: "Alice",
  age: 25
};

console.log("name" in person); // true
console.log("gender" in person); // false
//with loop
if ("age" in person) {
  console.log(person.age); // 25
}



//call()
const obj1={
     name:'hiba',
     greet(){
        console.log(this.name)
     } 
}

const obj2={
     name:'Firoz',
    demo(){
        obj1.greet.call(obj1)
    }
}
obj2.demo()

//call function with arguments
const obj1 = {
  name: "Hiba",
  greet(greeting) {
    console.log(greeting+'im '+this.name)
  }
};

const obj2 = {
  name: "Firoz",
  demo(){
    obj1.greet.call(obj1,'hello')
  }
};
obj2.demo()

//apply()
const obj1 = {
  name: "Hiba",
  greet(greeting) {
    console.log(greeting+'im '+this.name)
  }
};

const obj2 = {
  name: "Firoz",
  demo(){
    obj1.greet.call(obj1,['hello'])
  }
};
obj2.demo()

//bind()
const obj1 = {
  name: "Hiba",
  greet(greeting) {
    console.log(greeting+' im '+this.name)
  }
};

const a=obj1.greet.bind(obj1,'hello')
a();

const person = {
  name: "Lena",

  greet1: function() {
    console.log(this); 

    function inner1() {
      console.log(this);
    }

    inner1();

    let inner2 = () => {
      console.log(this); // if arrow fn located inside a regular function, it will access that keyword
    }

    inner2();
  },

  greet2: () => {
    console.log(this); 
  }
};
person.greet2()

//array of objects
//An array of objects is a list where each item is an object
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];
console.log(users[0].name);     // accessing
console.log(users[1]["age"]);   

for (let i = 0; i < users.length; i++) { //looping using for
  console.log(users[i].name);
}

users.forEach(user => {        //forEach loop
  console.log(user.name);
});

const names = users.map(user => user.name);  //using map()
console.log(names);  

const olderUsers = users.filter(user => user.age > 24);

const charlie = users.find(user => user.name === "Charlie");

const students = [   //array of nested obj
  {
    name: "Emily",
    marks: {
      math: 90,
      english: 85
    }
  },
  {
    name: "John",
    marks: {
      math: 80,
      english: 70
    }
  }
];

console.log(students[0].marks.math); // 90

users.sort((a, b) => a.age - b.age);    //sort

if ("age" in users[0]) {             //in operator
  console.log("Age exists");
}

//array inside obj
//one of the properties in an object is an array
const person = {
  name: "Alice",
  hobbies: ["reading", "coding", "traveling"]
};

console.log(person.hobbies);         //access
console.log(person.hobbies[1]);      

person.hobbies.forEach(hobby => {   //looping
  console.log(hobby);
});

person.hobbies[1] = "designing";  // update

person.hobbies.push("drawing");
console.log(person.hobbies); //adding

person.hobbies.pop();  // remove

const classroom = {                      //multiple array
  students: ["Alice", "Bob", "Charlie"],
  marks: [85, 90, 78]
};

console.log(classroom.students[0]); 
console.log(classroom.marks[1]);   

const movie = {                          //loop and condition
  title: "Inception",
  actors: ["Leonardo", "Joseph", "Elliot"]
};

movie.actors.forEach(actor => {
  if (actor.startsWith("L")) {
    console.log(actor); // "Leonardo"
  }
});

const school = {                //nested array
  classes: [
    ["Alice", "Bob"],      // class 1
    ["Charlie", "David"]   // class 2
  ]
};

console.log(school.classes[1][0]); // "Charlie"

//nested objects
//object inside another object.
const person = {
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001"
  }
};

console.log(person.address.city);     // "New York"
console.log(person["address"]["zip"]); // "10001"

person.address.city = "Los Angeles"; //update

person.address.country = "USA"; //add

//multiple nested levels
const user = {
  name: "Bob",
  contact: {
    email: "bob@example.com",
    phone: {
      mobile: "1234567890",
      home: "0987654321"
    }
  }
};

console.log(user.contact.phone.mobile); // "1234567890"

//loop through nested obj
for (let key in person) {
  if (typeof person[key] === "object") {
    for (let innerKey in person[key]) {
      console.log(innerKey + ": " + person[key][innerKey]);
    }
  } else {
    console.log(key + ": " + person[key]);
  }
}

//optional chaining
console.log(user.contact?.phone?.office);  // undefined (doesn't throw error)

//nested obj inside array
const users = [
  {
    name: "Alice",
    skills: {
      frontend: "React",
      backend: "Node.js"
    }
  },
  {
    name: "Bob",
    skills: {
      frontend: "Vue",
      backend: "Django"
    }
  }
];

console.log(users[1].skills.backend); // "Django"

//optional chaining
   //Optional chaining lets you safely access properties of an object that might be undefined or null, without throwing an error
const user = {
  name: "Alice",
  address: {
    city: "Paris"
  }
};

// Accessing a nested property
console.log(user.address.city); // ✅ Paris

// But if address doesn't exist:
const user2 = {
  name: "Bob"
};

console.log(user2.address.city); // ❌ Error: Cannot read property 'city' of undefined

console.log(user2.address?.city); // ✅ undefined (no error)














