// 1. Login + Session Setup
// 🔹 Create a /login route that renders a login form using EJS.
// 🔹 On form submit, verify hardcoded credentials (admin, 1234).
// 🔹 If valid, create a session with req.session.isAuth = true and redirect to /dashboard.
// 🔹 If invalid, show an error on the same page.
// 🔹 Style the login form with Tailwind CSS.

const express=require('express')
const app=express()
const port=3001
const path=require('path')
const session=require('express-session')
const { error } = require('console')

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'hibaSecretKey', 
    resave: false,
    saveUninitialized: true
}));

app.get('/login',(req,res)=>{
     res.render('login',{error:null})
})

app.post('/login',(req,res)=>{
    const {username, password}=req.body
    if(username==='hiba' && password==='12345'){
       req.session.isAuth=true
       req.session.username=username
       res.redirect('/dashboard')
    }else{
        res.render('login',{error:'Invalid'})
    }
})

app.get('/dashboard',(req,res)=>{
    if(req.session.isAuth){
        res.render('dashboard')
    }else{
        res.render('login',{error:'Please Login First'})
    }
})

// Add a /logout route that destroys the session.
// 🔹 After logout, redirect to /login.

app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

// Create a route /profile/:username that displays Hello, username!
// 🔹 Add Tailwind card styling.

app.get('/profile/:username',(req,res)=>{
    const username=req.params.username
    res.send(`<h1>Hello ${username}</h1>`)
})

app.get('/register',(req,res)=>{
    res.render('register',{error:null})
})

app.get('/header',(req,res)=>{
    res.render('header')
})

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body
    if(!password || password.length<6){
        return res.render('register',{error:'Password must be greater than 6'})
    }else{
        res.send('Registered Successfully')
    }
})

app.get('/products',(req,res)=>{
    const products=[
        {name:'lipstick', price:2000},
        {name:'concealer', price:3000},
        {name:'moisturizer', price:5000}
    ]

    res.render('products',{products})
})


app.listen(port,()=>{console.log('http://localhost:3001/login')})