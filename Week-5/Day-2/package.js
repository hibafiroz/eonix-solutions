// WHAT IS A PACKAGE?

// A package in Node.js is a collection of files and code (usually JavaScript) that performs a specific functionality and can be reused in other projects.
// Examples

// 	express → Web framework
// 	mongoose → MongoDB object modeling

// These packages are managed using npm (Node Package Manager) and stored in the node_modules directory.
// Each package usually contains
// 	Code (functions, classes)
// 	A package.json file (with metadata)
// 	Possibly other assets (like docs, configs)


// WHAT IS NPM? (NODE PACKAGE MANAGER)

// npm is the default package manager for Node.js
// we use it to:
// 	Install packages
// Uninstall packages
// 	Publish your own packages
// 	Manage project dependencies


// INITIALIZING NPM
// To use packages in our project, we must initialize npm

// npm init => It creates a file called package.json with details about your project:
// npm init –y => This skips the questions and creates a package.json file with default values

// WHAT HAPPENS WHEN WE RUN NPM INIT?

// When we run npm init, it helps us create a file called package.json, which stores all the basic details about our Node.js project — like name, version, author, and which packages it uses.
// We can also run npm init -y to skip the questions and create the file with default values.

// PACKAGE.JSON & PACKAGE-LOCK.JSON

// Package.json is the main file that describes a Node.js project.
// It contains details like the project’s name, version, and a list of dependencies (packages) the project needs.
// It also includes scripts like how to start the app using npm start

// "scripts": {
//   "start": "node index.js"
// }

// This means
// 	If WE type npm start in the terminal,
// 	It will run node index.js (which starts your app)


// Package-lock.json is automatically created when we install packages
// It records the exact versions of all installed packages and their sub-packages, to make sure the project behaves the same way on every system.
// So while package.json lists what we want, package-lock.json locks in exactly what we got
