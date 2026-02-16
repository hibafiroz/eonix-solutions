//A router is a way to handle specific paths in a separate file. It helps in grouping related routes and makes the code more organized

// Why use it?

// We split routes into separate files to keep our code neat and easy to manage
// instead of putting everything in one big file, we create small files for each part like students.js, products.js, etc...
// This makes the project easier to read and grow in the future


const express=require("express")
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Welcome")
})
router.get('/:id',(req,res)=>{
    const id=req.params.id
    res.send(`Your ID is ${id}`)
})

module.exports=router