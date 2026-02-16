In Node.js, modules are reusable blocks of code that help organize our application. Node.js uses the CommonJS module system, where each file is treated as a separate module. we can use built-in core modules, third-party modules (via npm), or create our own custom modules.

Three Types of Modules in Node.js

1. Core Modules (Built-in)
These are modules provided by Node.js out of the box and no installation is required.
fs- File system operations
http- Create HTTP server
url- Parse and format URLs
path- Handle file paths
os-	Info about OS (CPU, memory, etc.)
events-	Handle events using EventEmitter
util- Utility functions
crypto- Cryptographic functionality


2. Local Modules (Custom/User-defined)

Modules that I create myself, usually in separate files, and imported using require.
function add(a, b) {  // in file math.js 
    return a + b;
}
module.exports = { add };

const math = require('./math');  //in file app.js
console.log(math.add(2, 3)); // 5

3. Third-Party Modules
Third-party modules are created by other developers that are not part of the Node.js core and These modules provide additional functionality and are installed using npm.
Install express(it’s a third party module)
npm install express
then use it
const express = require('express');
const app = express();

require() is used to import a module.
module.exports is used to export code from a module.
