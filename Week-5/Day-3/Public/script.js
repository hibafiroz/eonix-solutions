const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("Recieved")
})
app.listen(3008,()=>{console.log("http://localhost:3008")})