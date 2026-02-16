// WHAT IS ROUTING IN EXPRESS?

// Routing means how your server handles different URL paths and HTTP methods like GET, POST, PUT, DELETE, etc.
// Basic Route Syntax
// app.METHOD(PATH, HANDLER)

// Example: All Basic Routes
// const express = require('express');
// const app = express();


// GET route - Home
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });


// POST route - for submitting form data
// app.post('/submit', (req, res) => {
//   res.send('Form Submitted');
// });


// PUT route - update something
// app.put('/update', (req, res) => {
//   res.send('Data Updated');
// });


// DELETE route - delete something
// app.delete('/delete', (req, res) => {
//   res.send('Data Deleted');
// });
// app.all(path, callback) is used to match all HTTP methods (GET, POST, PUT, DELETE, etc.) on a specific route.


// Understanding How Route Order Affects Behavior


// Express evaluates routes in the order they are defined
// The first matching route will be executed, and Express will not check the rest unless next() is used.
// app.get('/user/:id', (req, res) => {
//   res.send(`User ID: ${req.params.id}`);
// });

// app.get('/user/profile', (req, res) => {
//   res.send('User Profile Page');
// });
//   Visiting /user/profile will go into /user/:id because :id will match anything — including profile.
//   req.params.id will be 'profile'.
//  Put static routes first (e.g., /user/profile)
//   Put dynamic routes later (e.g., /user/:id)

// Handling Unmatched Routes (404 Error Handling) in Express

// A 404 error means: “The route or resource you requested was not found on the server.”
// Express doesn’t automatically send a 404. If no defined route matches the request, you need to handle it manually
//  404 handler — must be placed AFTER all valid routes
// app.use((req, res) => {
//   res.status(404).send('404: Page Not Found');
// });

// Return an HTML page:

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  `);
});
// Return a JSON response:

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});


app.all('*', (req, res) => {
  res.status(404).send('404: This route does not exist');
});



// Sending Different Types of Responses in Express

// (HTML, JSON, Text, etc.)

// 1. Text Response
// Use res.send() to send plain text.
app.get('/text', (req, res) => {
  res.send('This is a plain text response');
});							
//  Express automatically sets Content-Type: text/html when sending text.


// 2. HTML Response
// we can send HTML strings using res.send():
// app.get('/html', (req, res) => {
//   res.send(`
//     <h1>Welcome</h1>
//     <p>This is an HTML response</p>
//   `);
// });
//  Express still uses res.send(), but recognizes it as HTML.


// 3. JSON Response
// Use res.json() to send a JavaScript object as JSON:
app.get('/json', (req, res) => {
  res.json({
    success: true,
    message: 'This is a JSON response',
  });
});
//  This automatically sets Content-Type: application/json.


//  4. File Response
// Use res.sendFile() to send files like HTML pages:
// const path = require('path');

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//  This is useful for serving static HTML or images.


// 5. Status Code + Response

// app.get('/unauthorized', (req, res) => {
//   res.status(401).send('Unauthorized access');
// });


// What Are Route Parameters?

// Route parameters are dynamic parts of the URL, used to capture values from the URL path.
// They are defined using : in the route path and accessed using req.params.

// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID is ${userId}`);
// });
// If we visit:
// http://localhost:3000/user/123
// it will respond: User ID is 123


// ROUTE PARAMETER

// •	Fetching data for a specific user/product/article.
// •	Identifying a specific resource.
// Example with Multiple Parameters
// js
// CopyEdit
// app.get('/product/:category/:id', (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Category: ${category}, Product ID: ${id}`);
// });
// If you visit:
// http://localhost:3000/product/cosmetics/456


// QUERY PARAMETERR

// Query parameters are key-value pairs added to the end of a URL, typically used to filter, sort, or search data.
// They come after a ? in the URL, and are separated by &.
// http://localhost:3000/search?term=laptop&brand=apple
// term = laptop

// brand = apple
// How to Handle in Express
// You access them using:
// req.query

// const express = require('express');
// const app = express();

// app.get('/search', (req, res) => {
//   const { term, brand } = req.query;
//   res.send(`You searched for: ${term}, Brand: ${brand}`);
// });

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

