const express=require('express')
const app=express()
const path=require('path')
const session=require('express-session')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

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
    const {username,password}=req.body
    if(username==='admin'&&password==='12345'){
        req.session.isAuth=true;
        req.session.username=username
        res.redirect('home')
    }else{
        res.render('login',{error:'Invalid Login'})
    }
})

app.get('/home', (req, res) => {
    if (req.session.isAuth) {
        res.render('home', { username: req.session.username });
    } else {
        res.render('login', { error: 'Please log in first' });
    }
});

app.get('/signout',(req,res)=>{
    // req.session.destroy(()=>{
        res.redirect('/login')
    })
// })

app.listen(3000,()=>{
    console.log('http://localhost:3000/login')
})