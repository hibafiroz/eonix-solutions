// View Engine allow us to create dynamic HTML pages using server-side data
// instead of sending plain HTML files we can send HTML + data from the server to the browser

// Dynamic Rendering means the server creates the HTML page on the spot by using data like user names or products and then sends it to the browser
//  instead of sending the same static HTML file every time the server fills in the page with different content based on the Request

//common view engine express

// EJS-	.ejs
// Pug-	.pug
// Handlebars-	.hbs

//Setting up EJS in Express
// 1. Install EJS
 npm install ejs

 
// 2. Setup in Express
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the view engine


// 3. Create views/home.ejs (views must be folder name like public)
// <h1>Welcome <%= username %>!</h1>


// 4. Route in server.js
// Passing Data with res.render()
app.get('/', (req, res) => {
 res.render('home', { username: 'Hiba' }); // Sends dynamic content
});

//  This will render:
// Welcome Hiba!
