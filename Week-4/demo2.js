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
//             orderFood()
//             .then((val)=>{
//                 console.log(val)
//                 return cookFood()
//             })
//             .then((val)=>{
//                 console.log(val)
//                 return serveFood()
//             })
//             .then((val)=>{
//                 console.log(val)
//             })

            //  async function prob() {
            //     const a=await orderFood()
            //     console.log(a)
            //     const b=await cookFood()
            //     console.log(b)
            //     const c=await serveFood()
            //     console.log(c)
            // }
            // prob()

//  User types a note into an input field.
// On clicking Save Note, the note is stored in localStorage.
// On clicking Show Note, the note is displayed.
// On clicking Clear Note, the saved note is removed from both UI and storage.

