//DATE OBJECT

// let a=43.45672
// let b=a.toFixed(4);  // "5.68"
// console.log(b)


// let a=new Date()
// a.setDate(9)
// console.log(a)

// let today=new Date()
// let year=today.getFullYear()
// let month=today.getMonth()+1
// let day=today.getDate()-1
// console.log(year+"-"+month+"-"+day)

// let current=new Date()
// let year=current.getFullYear()
// let month=String(current.getMonth()+1).padStart(2,'0')
// let day=current.getDate()
// console.log(year+"-"+month+"-"+day)

let time=new Date()
let hour=String(time.getHours()).padStart(2,'0')
let minute=String(time.getMinutes()).padStart(2,'0')
let sec=String(time.getSeconds()).padStart(2,'0')
console.log(hour)

// let map=new Map()
// map.set("name","hiba")
// console.log(map)
// let obj={...}

// console.log("Start cooking");

// setTimeout(() => {
//   console.log("Oven says: Pizza is ready!");
// }, 2000);

// console.log("Chop vegetables");

// const a=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve('success')
//     },2000)
// })
// const promise = new Promise((resolve, reject) => {
//   throw new Error("Something went wrong!");
// });

// promise.catch(error => {
//   console.log("❌ Caught error:", error.message);
// });

// async function name() {
//     return pa;
// }
// const a=name()
// a.then((val)=>console.log(val))

// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("task done")
//     }else{
//         reject("failed")
//     }
// })
// promise
// .then((val)=>{console.log(val)})
// .catch((val)=>{console.log(val)})
// .finally((val)=>{console.log('finished')})

// function fetchData(){
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=true
//             if(success){
//                 resolve("task done")
//             }else{
//                  reject("task failed")
//             }
//         },2000)
//     })
// }
// fetchData().
// then((val)=>{console.log(val)})
// .catch((val)=>{console.log(val)})

//  function startBaking(){
//    return new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Cake is baked")
//     }else{
//         reject("ovan malfunctioned")
//     }
// })
//  }
// startBaking().then((val)=>{console.log(val)})
// .catch((val)=>{console.log(val)})
// .finally(()=>{console.log("kitchen is clean")})

// function startBaking() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve("Cake is baked");
//       } else {
//         reject("Oven malfunctioned");
//       }
//     }, 2000);
//   });
// }

// Now chain steps:
// 1. Log: "Cake is baked"
// 2. Return "Cake is decorated"
// 3. Log: "Cake is decorated"
// 4. Return "Cake is served"
// 5. Log: "Cake is served"

// startBaking()
//  .then((val)=>{
//     console.log(val)
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve("cake is decorated")
//         },1000)
//     })
//  })
//  .then((val)=>{
//     console.log(val)
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("cake is served")
//         })
//     },1000)
//  })
//  .then((val)=>{
//     console.log(val)
//  })

//  function boilWater() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Water boiled");
//       resolve("Boiled Water");
//     }, 1000);
//   });
// }

// function addTeaLeaves(previousStep) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Added tea leaves to " + previousStep);
//       resolve("Tea Infused Water");
//     }, 1000);
//   });
// }

// function pourTea(finalStep) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Tea poured from " + finalStep);
//       resolve("Tea Ready to Drink 🍵");
//     }, 1000);
//   });
// }

// Your task:
// Chain the functions so they run in order: boilWater ➝ addTeaLeaves ➝ pourTea
// Then, log the final result

// boilWater()
// .then((val)=>{
//   console.log(val)
//   return addTeaLeaves(val)
// })
// .then((val)=>{
//   console.log(val)
//   return pourTea(val)
// })
// .then((val)=>{
//   console.log(val)
// })

// function openLaptop() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Laptop opened 💻");
//       resolve("Laptop Ready");
//     }, 1000);
//   });
// }

// function openZoomApp(previousStep) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Zoom app opened after " + previousStep);
//       resolve("Zoom Ready");
//     }, 1000);
//   });
// }

// function joinMeeting(finalStep) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Joined meeting using " + finalStep);
//       resolve("In the Meeting 🎥");
//     }, 1000);
//   });
// }

// Your Task:
// Chain the three functions: openLaptop ➝ openZoomApp ➝ joinMeeting
// Log each step's resolved value.

// openLaptop()
// .then((val)=>{
//   console.log(val)
//   return openZoomApp(val)
// })
// .then((val)=>{
//   console.log(val)
//   return joinMeeting(val)
// })
// .then((val)=>{
//   console.log(val)
// })

// function wearDress(){
//   return new Promise((resolve)=>{
//     resolve("wear your dress")
//   })
// }

// function putOnShoes(previousStep){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//     resolve("put on shoes")
//   })
//   },1000)
// }

// function takeYourBag(previousStep){
 
//     return new Promise((resolve)=>{
//        setTimeout(()=>{
//       resolve("take your bag")
//     })
//   },1000)
// }
// wearDress()
// .then((val)=>{
//   console.log(val)
//   return putOnShoes(val)
// })
// .then((val)=>{
//   console.log(val)
//   return takeYourBag(val)
// })
// .then((val)=>{
//   console.log(val)
// })

// async function p(){
//   let res=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   let data=await res.json()
//   return data
// }
// console.log(p())
// p().then(data => console.log(data));


// Write an async function called getPost() that:
// Uses fetch() to get data from this URL:
// 👉 https://jsonplaceholder.typicode.com/posts/1
// Waits for the response.
// Converts it to JSON.
// Logs the title of the post.
// Wrap everything in try...catch to handle errors.

// async function getPost() {
//   try{
//   let res=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   let data=await res.json()
//   console.log(data.title)
//   }catch(error){
//     console.log("invalid error",error)
//   }
// }
// getPost()


// Write an async function called getUser() that:
// Fetches data from:
// 👉 https://jsonplaceholder.typicode.com/users/3
// Converts the response to JSON.
// Logs the user's name and email.
// Handles errors with try...catch.

// async function getUser(){
//   try{
//   let res=await fetch("https://jsonplaceholder.typicode.com/users/3")
//   let data=await res.json()
//   console.log(data.name)
//   console.log(data.email)
//   }catch(error){
//     console.log("error",error)
//   }
// }
// getUser()


// Write an async function called getTodos() that:
// Fetches data from:
// 👉 https://jsonplaceholder.typicode.com/todos
// Converts it to JSON.
// Logs the titles of the first 5 todos only.
// Handles any errors using try...catch.

async function getTodos(){
  let res=await fetch("https://jsonplaceholder.typicode.com/todos")
  let data=await res.json()
  let todo=data.slice(0,5)
  todo.forEach(element => {
    console.log(element.title)
  });
}
getTodos()



//You have 3 fake API functions: apiOne(), apiTwo(), and apiThree().
// Each returns a resolved Promise after different delays.
// Use Promise.all() to run all 3 APIs in parallel.
// Wait for all of them to finish.
// Once they all complete, log:

// function apiOne(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("one success")
//     },1000)
//   })
// }
// function apiTwo(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("two success")
//     },2000)
//   })
// }
// function apiThree(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("three success")
//     },2000)
//   })
// }
// Promise.all([apiOne(),apiTwo(),apiThree()])
// .then((val)=>{console.log(val)})
// .catch((val)=>{
//   console.log(val)
// })


// You have 3 fake API functions: apiOne(), apiTwo(), and apiThree().
// Each one returns a promise that resolves after different delays.
// Use Promise.race() to start all 3 APIs in parallel.
// Log the first result that finishes — success or failure.
// If the fastest one resolves, log:

// function apiOne(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("one success")
//     },1000)
//   })
// }
// function apiTwo(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("two success")
//     },2000)
//   })
// }
// function apiThree(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("three success")
//     },2000)
//   })
// }
// Promise.race([apiOne(),apiTwo(),apiThree()])
// .then((val)=>{console.log(val)})
// .catch((val)=>{console.log(val)})


// You have 3 fake APIs: apiOne(), apiTwo(), apiThree()
// One of them should reject.
// The other two should resolve after different times.
// Use Promise.any() to run all three in parallel.
// Log:
// 🎉 First successful result: <value>
// If all of them fail, catch the error and log:
// ❌ All promises failed: <AggregateError></AggregateError>

// function apiOne(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("one success")
//     },1000)
//   })
// }
// function apiTwo(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       reject("two success")
//     },2000)
//   })
// }
// function apiThree(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("three success")
//     },2000)
//   })
// }
// Promise.any([apiOne(),apiTwo(),apiThree()])
// .then((val)=>{console.log("first api result",val)})
// .catch((err)=>{console.log("all promises failed",err)})

// function outer(){
//   let name='hiba';
//   return function inner(){
//     console.log(name)
//   }
// }
// const greet=outer()
// greet();

// const start=new Date("2025-06-25")
// const end=new Date("2025-06-21")
// const diff=start-end
// const days=diff/(1000*60*60*24)
// console.log(days)

// const neww=new Date("2025-06-22")
// console.log(neww.toISOString())

// const a=new Set([1,2,3])
// console.log(a)

// const numbers = [1, 2, 3, 2, 4, 1, 5];
// ❓Remove duplicates using Set and print the result as an array.
// let sett=[...new Set(numbers)]
// console.log(sett)

// const letters = new Set();
// // ❓Add "a", "b", "c" to the set.
// // ❓Then check if "b" is in the set.
// // ❓Finally, remove "a" from the set and print the set.
// letters.add("a")
// letters.add("b")
// letters.add("c")
// console.log(letters.has("b"))
// letters.delete("b")
// console.log(letters)

// const words = ["apple", "banana", "apple", "orange", "banana", "grape"];
// // ❓1. Use Set to count how many **unique** words are in the array.
// // ❓2. Print the number.
// const sett=new Set(words)
// console.log(sett)

// const ids = new Set([101, 102, 103]);
// // ❓Loop through the Set and print: "ID: 101", "ID: 102", etc.
// for(let val of ids){
//   console.log("id:",val)
// }

// ❓Create a Map and do the following:
// - Set the key "name" to "Hiba"
// - Set the key "age" to 22
// - Get and print the value for "name"
// - Check if "age" key exists
// const mapp=new Map()
// mapp.set("name","Hiba")
// mapp.set("age",21)
// console.log(mapp.get("name"))
// console.log(mapp.has("age"))

// const userMap = new Map();
// userMap.set("name", "Sara");
// userMap.set("role", "Developer");
// userMap.set("location", "Dubai");
// // ❓Loop through the map and print each key-value pair like this:
// // 👉 name: Sara
// // 👉 role: Developer
// // 👉 location: Dubai
// for(let [key,value] of userMap){
//   console.log(key+" : "+value)
// }


// ❓Create a debounce function
// ❓When a button is clicked many times quickly, "Clicked!" should be logged only once after 1 second.
// 👇 Your task:
// 1. Write a debounce() function.
// 2. Wrap handleClick with debounce (1 sec).
// 3. Use it in a button click event.

// let user={
//     name:'hiba'
// }
// let a=Symbol('id')
// let b=Symbol('id')
// user[a]=101
// user[b]=102
// for(let key in user){
//     console.log(key)
// }


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <button id="btn">click here</button>
//   <script>
//     const btn=document.getElementById("btn")
//     function debounce(func,delay){
//       let timer;
//       return ()=>{
//         clearTimeout(timer)
//         timer=setTimeout(func,delay)
//       }
//     }
//     function resized(){
//       console.log("btn clicked")
//     }
//     const btnClick=debounce(resized,500)
//     btn.addEventListener("click",btnClick)
//   </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>resize window</h1>
//   <script>
//     function debounce(func,delay){
//       let timer;
//       return ()=>{
//         clearTimeout(timer)
//         timer=setTimeout(func,delay)
//       }
//     }
//     function resized(){
//       console.log(window.innerHeight, window.innerWidth)
//     }
//     const windowResize=debounce(resized,500)
//     window.addEventListener("resize",windowResize)
//   </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//    <input id="inp" type="text" placeholder="type here">
//   <script>
//     function debounce(func,delay){
//       let timer;
//       return ()=>{
//         clearTimeout(timer)
//         timer=setTimeout(func,delay)
//       }
//     }
//     function type(){
//       console.log(document.getElementById("inp").value)
//     }
//     const windowResize=debounce(type,500)
//     window.addEventListener("input",windowResize)
//   </script>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button id="btn">click</button>
//     <script>
//         function throttle(func,delay){
//             let last=0;
//             return ()=>{
//                 const now=Date.now()
//                 if((now-last)>=delay){
//                     last=now;
//                     func();
//                 }
            
//             }
//         }
//         function throttled(){
//             console.log("btn clicked at",new Date().toLocaleTimeString())
//         }
//         const a=throttle(throttled,2000)
//         btn.addEventListener("click",a)
//     </script>
// </body>
// </html>

//placeOrder(food) – takes a food item (e.g., "Burger") and after 1 second logs:
// 👉 "Order placed for Burger"
// cookOrder(food) – after 2 seconds logs:
// 👉 "Burger is cooked"
// deliverOrder(food) – after 1 second logs:
// 👉 "Burger is delivered"

// function placeOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Burger")
//         },1000)
//     })
// }
// function cookOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Burger is cooked")
//         },2000)
//     })
// }
// function deliverOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Burger is delivered")
//         },1000)
//     })
// }
// placeOrder()
// .then((val)=>{
//     console.log(val)
//     return cookOrder()
// })
// .then((val)=>{
//     console.log(val)
//     return deliverOrder()
// })
// .then((val)=>{
//     console.log(val)
// })

// async function startProcess(){
//    const a= await placeOrder()
//    console.log(a)
//    const b= await cookOrder()
//    console.log(b)
//    const c= await deliverOrder()
//    console.log(c)
// }
// startProcess()

function orderFood(){
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                       resolve("Order placed")
                    },1000)
                })
            }
            function cookFood(){
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve("Food cooked")
                    },2000)
                })
            }
            function serveFood(){
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve("Food served")
                    },1000)
                })
            }
            orderFood()
            .then((val)=>{
                console.log(val)
                return cookFood()
            })
            .then((val)=>{
                console.log(val)
                return serveFood()
            })
            .then((val)=>{
                console.log(val)
            })

            // async function prob() {
            //     const a=await orderFood()
            //     console.log(a)
            //     const b=await cookFood()
            //     console.log(b)
            //     const c=await serveFood()
            //     console.log(c)
            // }