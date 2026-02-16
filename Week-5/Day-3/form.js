const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.post('/login',(req,res)=>{
    const username=req.body.username
    res.send(`Welcome ${username},Login successful`)
})
app.listen(3006,()=>console.log("http://localhost:3006/login"))