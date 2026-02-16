// Create a basic Student Registration Portal using Node.js, Express, and EJS.
 
//  Instructions:
// 	1.	Create a registration page
// 	•	Route: GET /register
// 	•	Display a form with input fields for: name, age, and class
// 	•	(Optional: Style the form using Tailwind CSS)
// 	2.	Handle form submission
// 	•	Route: POST /register
// 	•	Store each submitted student in a dummy array in memory
// 	3.	Display registered students
// 	•	Route: GET /students
// 	•	Use EJS to loop through the array and display all student data in a table format
// 	4.	(Optional Bonus)
// 	•	Add a route: GET /students/:id
// 	•	Show details of the selected student based on their index in the array

const express=require('express')
const app=express()
const path=require('path')
const port=3001

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
// const students = [
//   { name: "Aisha", age: 18, class: "12A" },
//   { name: "Zain", age: 17, class: "11B" },
//   { name: "Riya", age: 16, class: "10C" },
//   { name: "Aryan", age: 15, class: "9A" },
//   { name: "Meera", age: 17, class: "11A" },
//   { name: "Adil", age: 18, class: "12B" },
//   { name: "Sara", age: 14, class: "8C" },
//   { name: "Farhan", age: 16, class: "10A" },
//   { name: "Neha", age: 15, class: "9B" },
//   { name: "Karan", age: 14, class: "8A" }
// ];

app.get('/students',(req,res)=>{
    res.render('students',{students})
})

app.get('/',(req,res)=>{
    res.render('register')
})

 const students=[]

app.post('/',(req,res)=>{
    const {name,email,age} =req.body;
    const id = students.length;
    students.push({id,name,email,age})
    res.send(`<a href="/students/${id}">View Student detail</a>`);
})

app.get('/students/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    res.render('students',{ students });
})

app.listen(port,()=>{console.log('http://localhost:3001')})