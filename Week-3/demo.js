// // let level=3;
// // switch(level){
// //     case 0:
// //         console.log('beginner')
// //         break;
// //     case 1:
// //         console.log('intermediate')
// //         break;
// //     case 2:
// //         console.log('advanced')
// //         break;
// //     case 3:
// //         console.log('expert')
// //         break;
// //     default:
// //         console.log('unknown level')            
// // }


// // let a=[1,3,5,8]
// // a.forEach((n)=>{
// //     return n*3
// // })
// // console.log(a)

// // const arr = [0, 1, "", "text", undefined, null, NaN, 42];

// // const result = arr.reduce((acc, val) => {
// //   if (val) {
// //     acc.push(val)
// //   }
// //   return acc;
// // },[]);

// // console.log(result); // Output: [1, "text", 42]

// // const user = {
// // profile: {
// // address: {
// // city: "Dubai"
// // }
// // }
// // };
// // console.log(user.profile?.address?.city);
// // console.log(user.profile?.contact?.phone);;

// // const a={
// //     name:'hiba',
// //     age:21,
// // }
// // const b=a;
// // b.name='firoz'
// // console.log(a)

// // function outer(){
// //     let name="hiba";
    
// //   function greet(){
// //         console.log(name)
// //     }
// //     greet()
 
// // }

// const person = {
//   greet: function () {
//     return "Hello";
//   }
// };

// const student = Object.create(person);
// student.name = "Alice";

// console.log(student.name);     // "Alice" (own property)
// console.log(student.greet());
// let a=-2
// let b=a>0?'positive':'negative';
// console.log(b)

// let a='banana';
// switch(a){
//   case 'mango':
//     console.log('ok')
//     break;
//     case 'banana':
//       console.log('no')
//       break;
//       default:
//         console.log('unknown')
// }

// let a=1
// while(a<=10)
// {
//   console.log(a)
//   a++;
// }

// const a=function(name,callback){
//   console.log('hello '+name)
//   callback(name)
// }
// const saybye=function(name){
//   console.log('bye '+name)
// }
// a('hiba',saybye)

// function outer(){
//   return function inner(){
//     console.log('im inner function')
//   }
// }
// outer()();

//factory function
// function createUser(name,age){
//   return{
//      name,
//      age,
//      greet(){
//       console.log(name+' age is '+age)
//      } 
//   }
// }
// const user=createUser('hiba',21)
// console.log(user)
// user.greet()

//generator
// function* fruitGenerator(){
//   yield 'apple';
//   yield 'banana';
//   yield 'grapes';
// }
// const fn=fruitGenerator()
// console.log(fn.next())
// console.log(fn.next())
// console.log(fn.next())
// console.log(fn.next())
// console.log(fn.next())


// const a={
//     name:'hiba',
//     contact:{
//     phone:123,
//     email:'yougmailcom'
//   }
// }
// const copy=structuredClone(a)
// copy.contact.phone=890
// console.log(a)

// const a={
//     name:'hiba',
//     greet(){
//         console.log
//         ('hi')
//     }
// }
// const b={
//     name:'hiba',
// }
// b.__proto__=a
// console.log(b.__proto__)
// b.greet()
// // console.log(name)

const a={
    name:'hiba'
}
const b=Object.create(a)
console.log(b.name)