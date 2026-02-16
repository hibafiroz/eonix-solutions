// EXPRESS JS

// Express is a minimal and flexible web framework for Node.js.
// It helps us build web applications and APIs more easily by handling routing, requests, and responses.
// It’s one of the most popular tools for creating backend servers in JavaScript


// SETTING UP EXPRESS

// 1. Create a Project Folder
// Open terminal and run
// mkdir my-express-app
// cd my-express-app
// This creates a new folder and goes inside it.

// 2. Initialize the Project
// Run this command to create a package.json file:
// npm init -y	


//  3. Install Express
// Now install Express using npm:
// npm install express
// This adds Express to your project and saves it in package.json.

// 4. Create Your App File
// Create a file called index.js:
//manually create it in your folder.

// 5. Write Basic Express Code
// const express = require('express');
// const app = express();
// const port = 3000;

// // Home route
// app.get('/', (req, res) => {
//   res.send('Hello');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// 6. Run the Server
// In terminal--
// node index.js
//we will see
// Server is running at http://localhost:3000


// const express = require('express');
// const app = express();
//   This loads the Express module
//  express is a function (not an object!)
