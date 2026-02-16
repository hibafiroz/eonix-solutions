// Middleware in Express

// Middleware is a function that runs during the request–response cycle, it has access to the request and response objects, and a next() function to pass control to the next middleware.
//  Middleware is useful for logging, authentication, parsing, error handling etcc


// Middleware Function Signature:

function middleware(req, res, next) {
    // Your logic here
    next(); // pass to next middleware or route handler
}
// Without next(), the request will hang and never move forward to the next route

const express=require("express")
const server=express()
const port=3005

// server.use(middleware)
function middleware(req,res,next){
    console.log("First Middleware")
    next()
}
server.get('/',middleware,(req,res)=>{
    res.send("Completed")
})
server.listen(port,()=>console.log("http://localhost:3005"))

// Types of Middleware


// 1.Application-level Middleware


// These are middleware functions applied directly to the entire app using app.use() or route-specific with app.get(), app.post(), etc.
// Example:
// const logger = (req, res, next) => {
//   console.log(`[LOG] ${req.method} ${req.url}`);
//   next();
// };

// app.use(logger); // Applies to all routes
// You can also apply it to specific routes:
// app.get('/about', logger, (req, res) => {
//   res.send('About Page');
// });


//  2. Router-level Middleware


// Just like application-level, but tied to an express.Router() instance instead of the whole app.
// Example:
// const express = require('express');
// const router = express.Router();

// const authMiddleware = (req, res, next) => {
//   console.log('Router-level middleware called');
//   next();
// };

// router.use(authMiddleware);

// router.get('/profile', (req, res) => {
//   res.send('User Profile');
// });

// app.use('/user', router);
// // /user/profile → uses authMiddleware


// 3. Built-in Middleware (in Express)


// These are provided by Express itself. Common ones:
// express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads, and makes the parsed data available in req.body
// Without express.json(), req.body will be undefined.

// Middleware	Purpose
// express.json()	Parses JSON body
// express.urlencoded()	Parses URL-encoded form data
// express.static()	Serves static files like images

// app.use(express.json()); // Parses JSON body
// app.use(express.static('public')); 


// 4. Third-party Middleware


// Middleware you install via npm and plug into your app.
// Examples:
// 	morgan - HTTP request logger
// 	cors - Enable Cross-Origin Resource Sharing
// 	cookie-parser - Parse cookies
// Usage:
// npm install morgan cors
// const morgan = require('morgan');
// const cors = require('cors');

app.use(morgan('dev')); // Logs all requests
app.use(cors());        // Allows cross-origin requests


//  5. Error-handling Middleware

// Used to catch and handle errors in your app. Must have 4 parameters: (err, req, res, next)
// Example:
// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
//   res.status(500).send('Something broke!');
// });
// This should be defined after all routes and other middleware.


//Order of middleware
//The sequence in which middleware functions are written in the code is the same sequence 
// in which they are executed when a request comes in.

const express = require('express');
const app = express();

// 1st middleware
app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

// 2nd middleware
app.use((req, res, next) => {
  console.log('Second middleware');
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);

//output will be-
// First middleware
// Second middleware

//express executes middleware in the order we define them (top to bottom)
// if one middleware doesn’t call next() Express stops there
// Error-handling middleware(with 4 params: err,req,res,next) always goes last