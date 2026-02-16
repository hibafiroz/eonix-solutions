// express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads
// and makes the parsed data available in req.body
// Without express.json(), req.body will be undefined.


const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())

app.post('/',(req,res)=>{
    console.log('recieved',req.body)
    res.send("recieved")
})
app.listen(3003,()=>console.log("http://localhost:3003"))

// cors stands for Cross-Origin Resource Sharing (third party)

// Browsers have a security rule called the Same-Origin Policy which blocks requests from other origins to protect users.
//  So if my frontend runs on localhost:5500 and my Express backend runs on localhost:3000 the browser blocks the request

// So we use cors to enable communication between the frontend and backend when they are on different origins like different ports
// It adds headers like Access-Control-Allow-Origin to let the browser know the request is safe and allowed


// express.urlencoded() is a built-in middleware that allow the server to parse data sent from HTML forms and it handles requests with the Content-Type: application/x-www-form-urlencoded which is how forms send data by default
// We use { extended: true } to support nested data and complex form structures

// For example, if a form sends data like

// user[name]=hiba&user[role]=admin
// With extended: true, Express parses it as
// {
//   user: {
//     name: 'hiba',
//     role: 'admin'
//   }
// }
// But with extended: false, it won't parse nested structure properly.