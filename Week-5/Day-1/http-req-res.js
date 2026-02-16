// STRUCTURE OF AN HTTP REQUEST

// An HTTP request sent from a client (like a browser) to a server has four main parts:

// 1. URL (OR ENDPOINT)
// 	This is the address of the resource you want to access
// 	It includes:
// 	Protocol: http or https
// 	Domain: like example.com
// 	Path: like /users or /products/123
//  Example:
// GET https://api.example.com/users/5
// 	Here, /users/5 is the endpoint.


// 2. HEADERS
// Headers are Key-value pairs that give extra information about the request.
// 	Tell the server things like:
// 	What kind of data is being  sent
// 	Who is sending the request
// 	Do you need authentication?

// Example:
// Content-Type: application/json  
// Authorization: Bearer your-token-here

// 3. BODY (OPTIONAL)
// The main data sent from the client to the server.
// Used in methods like POST or PUT to send information.
// 	Usually contains:
// 	Form data
// 	JSON objects
// 	File uploads
//  Example Body (in JSON format):
// {
//   "name": "Hiba",
//   "email": "hiba@example.com"
// }

// 4. BLANK LINE
// A line between headers and body that separates them.

// How to Use Each Part of an HTTP Request (with fetch)

// fetch('https://api.example.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'     telling server you're sending JSON
// 'Authorization': 'Bearer your-token-here'      If API requires login
//   },
//   body: JSON.stringify({     body must be a string,  JSON.stringify() to convert the object.
//     name: 'Hiba',
//     email: 'hiba@example.com'
//   })
// });


// WHAT DOES THE SERVER SEND BACK? (HTTP RESPONSE)

// When a client (browser) sends a request, the server replies with an HTTP response.

// HTTP RESPONSE HAS 3 MAIN PARTS:

// 1. STATUS CODE
// A number that tells if the request was successful or not.
// CODE	MEANING
// 200	OK (Success)
// 201	Created
// 400	Bad Request (Error)
// 401	Unauthorized
// 404	Not Found
// 500	Server Error
	
// 2. HEADERS
// Extra information about the response, like:
// 	Type of content (e.g., HTML, JSON)
// 	How long it can be cached
// 	Server details
//  Example:
// Content-Type: application/json
// Content-Length: 123

// 3. BODY
// The main data the client asked for.
// 	It could be:
// 	HTML (a webpage)
// 	JSON (data from an API)
// 	Images, text, or files
//  Example JSON response:
// {
//   "message": "User created successfully",
//   "id": 123
// }

// Full example

// HTTP/1.1 200 OK                     <-- Status Code + Status Message
// Content-Type: application/json     <--  Response Headers
// Content-Length: 35

// {                                  <--  Response Body (data)
//   "id": 1,
//   "name": "Hiba"
// }

// The server sends back a response with a status code, some extra info, and the actual data requested.
