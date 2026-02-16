const express = require("express");
const app = express();

// Serve static files from "Public" folder
app.use(express.static("Public"));

app.listen(3009, () => {
    console.log("Server running on http://localhost:3009");
});



// We use the built-in middleware express.static() to serve static files like HTML, CSS, and JavaScript.
// First, we create a folder (usually named public) and place all our static files in it.
// Then in our code, we use app.use(express.static("public")).
// This makes all the files inside the public folder accessible in the browser

// The browser can access anything inside the public/ folder directly.
// Example:

// http://localhost:3000/ == loads index.html

// http://localhost:3000/style.css

// http://localhost:3000/script.js

//  Why Use express.static()?
// No need to manually create a route for each file.

// Automatically handles file types (CSS, JS, images, etc.).