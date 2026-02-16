const express=require('express')
const server=express()


server.get('/',(req,res)=>{
    res.send("Welcome to Get Method")
})
server.post('/',(req,res)=>{
    res.send('Welcome to Post Method')
})
server.listen(3001)
