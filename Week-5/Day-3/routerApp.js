const express=require("express")
const server=express()
const student=require("./Router/studentRoutes")

server.use("/students",student)

server.listen(3007,()=>{console.log("http://localhost:3007")})