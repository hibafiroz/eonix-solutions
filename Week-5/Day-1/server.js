// WHAT IS A SERVER?

// A server is a system—  that listens to requests from other systems, called clients, and responds by providing services or data. — it can be hardware or software
// 	Hardware: Physical computer that runs server software.
// 	Software: A program like Node.js or Express.js that listens to requests and sends responses.

// HOW CAN A COMPUTER BECOME A SERVER?

// A computer becomes a server when it runs software js that listens to requests and sends responses.
// Any computer — even our laptop — can become a server if--
// We install software that allows  to listen for requests and respond with data or services.
// USE REAL TOOLS YOU'VE USED LIKE:

// 	Live Server (in VS Code)
// 	Node.js with Express
// WHAT MAKES A REAL SERVER DIFFERENT FROM A PERSONAL COMPUTER?"

// Real servers usually have more powerful hardware, run 24/7, and it handles many client requests at once. But the basic concept is same — any machine running server software can serve data."
// LOCALHOST  VS  REMOTE SERVER

// LOCALHOST refers to our own computer acting as a server. We use it mainly for development and testing. When we run a project ,it’s only accessible on that particular device, and usually access it through URLs like http://localhost:3000 or 127.0.0.1.
// It doesn’t require any internet, has no security risk since only we can access it, and it’s free to use.

// REMOTE SERVER is a computer located in a data center that’s accessible over the internet. It is used to host live websites so users around the world can access them through a public URL like https://mywebsite.com. Remote servers must be properly secured with things like HTTPS and firewalls.
// And it require internet connection, and Often paid

// WHAT IS A PORT?

// A port is a number used by a computer to identify specific services
// DEFAULT (WELL-KNOWN) PORTS
// Default ports are used by standard services like web and email
// These are common ports already assigned for standard services


// SERVICE	PORT NUMBER
// HTTP (Websites) -80
// HTTPS (Secure websites) -443
// FTP (File transfer) -21
// SSH (Secure shell login) -22
// SMTP (Send emails) -25
// DNS (Domain lookup) -53

// Example:
// When we visit https://google.com, your browser talks to Google's server on port 443 (default for HTTPS).

// CUSTOM PORTS:

// Custom ports are set manually for personal or development projects.
// EXAMPLE USE	PORT NUMBER
// Node.js server	3000
// React app (Vite/CRA)	5173, 3000, etc.
// MongoDB (local dev)	27017

// Example:
// If you're building a project using Node.js, you might run it on
// http://localhost:3000
// Here, 3000 is the custom port we chose for our app

// WHAT KIND OF REQUESTS DOES A SERVER RECEIVE?

// A server receives requests to send, receive, update, or delete data or resources. These are usually called HTTP requests, and the main types are GET, POST, PUT, and DELETE.
// HTTP REQUEST BASICS

// WHAT IS AN HTTP REQUEST?

// An HTTP request is a message sent from a client (like your browser) to a server, asking for some action — like getting data, sending data, or updating something.


//   we visit a website → Your browser sends a GET request
//   we submit a form → Your browser sends a POST request
//   we edit a profile → Sends a PUT request
//  we delete a comment → Sends a DELETE request
// HTTP Methods (Request Types)

// HTTP methods tell the server what action the client wants to perform.

// 1. GET
// Used to get or read data from the server
// It does not change anything
// Example:  fetching user details

// 2. POST
// Used to send or create new data on the server
// It adds something new
// Example: Submitting a form

// 3. PUT
// Used to update existing data on the server
// It replaces the old data with new data
// Example: Editing your profile information

// 4. DELETE
// Used to delete data from the server
// Example: Deleting a comment or a post


// WHAT IS AN API?

// An API (Application Programming Interface) is a set of rules that allows two software applications to communicate to each other and share data.
// When a frontend application needs data from a server, it uses an API to send a request and get back a response. APIs help connect different parts of a project, like the frontend and backend, and are also used to connect with third-party services like weather, maps, or payment systems.
// WHY APIS ARE USED:
// 	To connect frontend and backend
// 	To get or send data (like users, products, messages)
// 	To use services like Google Maps, weather info, payment systems, etc

