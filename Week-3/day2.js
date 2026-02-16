// // function declaration
// function greet(name){
//     console.log('welcome '+name)
// }

// // function expression
// const a= function(){
//     console.log('welcome')
// }
// a();

// // arrow function
// const greet=(user)=>{
//     console.log('hello')
// }
// // arrow function as a callBack
// setTimeout(()=>{
//     console.log("hello")
// })
// // map
// const num1=[1,2,3,4]
// const num2=num1.map((n)=>{
//     return n*2;
// })
// console.log(num2)

// // first class function
// const sum=(a)=>a+a; //storing in variable

// const go=function greet(){
//         console.log('hello')
//     }
   
//     go();

//  //anonymous function
//  const greet=function(){  //no name
//     console.log('hello')
//  }   
//  //named function
//  const greet=function demo(a,b){
//     return a*b;
//  }
//  greet();


//  //callback function
//  function greet(name, callback) {
//   console.log("Hi "+name);
//   callback(); // calling the function passed in
// }
// function sayBye() {
//   console.log("Goodbye!");
// }
// greet("Alice", sayBye);


// //factory function
// function User(name, age) {
//   return {
//     name: name,
//     age: age,
//     greet: function() {
//      console.log('Hi, Im ' +name +' and Im '+age+' years old.');
//     }
//   };
// }
// const user1 = User("Alice", 20);//Create users using the factory function
// const user2 = User("Bob", 25);
// user1.greet();
// user2.greet();


// //high order function
// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye);


// //generator function
// //Generator function that yields 3 values
// function* greeting() {
//   console.log("Generator started");
//   yield "Hello";
//   yield "How are you?";
//   yield "Goodbye";
//   console.log("Generator ended");
// }
// // Creating the generator object
// const gen = greeting();
// console.log(gen.next()); 
// console.log(gen.next()); 
// console.log(gen.next()); 
// console.log(gen.next()); 

// //lexical scope
// function out() {
//   const color = "red";
//   function inner() {
//     console.log("Hello, " + color); // inner can access `name` from out
//   }
//   inner();
// }
// out(); 









// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     greet: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };
// }

// const person1 = createPerson('Rahul', 25);
// const person2 = createPerson('Anu', 30);

// person1.greet(); // Output: Hello, Rahul
// person2.greet(); // Output: Hello, Anu








