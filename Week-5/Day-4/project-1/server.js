const express=require('express')
const app=express()
const port=3012

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const studentData={
        username:"Hiba",
        hobbies:['Dance','Coding','Riding']
    }
    res.render('student',studentData)
})

app.listen(port)