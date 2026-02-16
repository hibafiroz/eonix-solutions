const express=require('express')
const app=express()
const port=3013
const path=require('path')

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home',{username:"Hiba"})
})
app.listen(port,()=>{console.log("http://localhost:3013")})
