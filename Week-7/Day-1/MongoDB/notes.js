//MongoDB:

//MongoDB is a NoSQL database that stores data in a JSON-like document-oriented way instead of tables like traditional SQL database.
//It is designed to handle large amounts of data and allows developers to store different kinds of information without a fixed structure.
//Key features of MongoDB:

// MongoDB stores data in JSON-like documents making it flexible, so it’s schema-free.    (schema means we don’t have to define the structure of the data before storing it)
// It’s highly scalable — Can handle huge amounts of data by adding more servers.
// Supports indexing to find data quickly.
// Provides high performance for fast read and write operations.
// And uses replication to keep data safe and always available.
// Cross platform: works on any OS and can be used locally or in the cloud (mongoDB atlas)
//Integration with javascript: since it uses JSON like syntax, it works perfectly with node.js and frontend apps.

//Advantanges of MongoDB:

// MongoDB is flexible — we can store any type of data easily.
// It’s fast, even if it handls large amounts of data.
// Can manage big data efficiently without slowing down.
// Easily scalable by adding more servers.
// Ideal for real-time apps like chats, social media, and analytics dashboards.

//MongoDB can be installed mainly in two ways:

// 1. Local Installation:
// Install MongoDB Community edition on our computer directly using mongosh works offline.

// 2. Cloud(mongoDB atlas):
// Use free and no need installation, stored and accessed through cloud, works online.

//Data types in MongoDB:

// 1. String
// Text data.
// Example: "name": "Hiba"

// 2. Number
// Any number (integer or float).
// Example: "age": 25

// 3. Boolean
// True or false value.
// Example: "isActive": true

// 4. Date
// Stores date and time.
// Example: "createdAt": ISODate("2025-10-14T10:00:00Z")

// 5. Array
// List of values.
// Example: "hobbies": ["reading", "coding", "music"]

// 6. Object
// Nested document (like a JSON object).
// Example:
// "address": {
//   "city": "Delhi",
//   "zip": 110001
// }

// 7. Null
// Represents no value or empty.
// Example: "middleName": null

// 8. ObjectId
// Unique ID automatically created for each document.
// Example: "_id": ObjectId("650f4e2f1234abcd5678ef90")

// 9. Decimal128
// High-precision decimal number (useful for money or scientific data).
// Example: "price": NumberDecimal("99.99")

//10.Date
//store date and time in standard way

// String / Number / Boolean / Date → basic types
// Array / Object / Null → structured data
// ObjectId / Decimal128 → special MongoDB types

//Structure of MongoDB

//It stores data in a heirarchy like-- database contains collections, and each collection contains documents. Documents are JSON-like objects that hold the actual data and can have flexible fields
//Tools to see databases:

// Start mongosh and run:
// 1. > show dbs  : Shows all databases on the server that have at least one collection.Empty databases (no collections) won’t appear here.
//output will be like:
// admin    0.000GB
// local    0.001GB
// myapp    0.125GB

//2. use <database> — Switch / create a database
// Syntax:

// > use school
// switched to db school
// Note: Database is created only when we insert data, just use doesn’t create it physically yet.

//3. db —  Shows which database we’re currently using.

// > db
// school

//4. show collections — List all collections in current DB

// > show collections
// students
// teachers
// classes
// Note: Empty collections may not appear until a document is inserted.

//5. db.createCollection("<name>") — Create a new collection
// > db.createCollection("students")
// { ok: 1 }

// 6. db.<collection>.insertOne() / insertMany() — Add documents
// > db.students.insertOne({ name: "Alice", age: 14, grade: 9 })
// > db.students.insertMany([{ name: "Bob" }, { name: "Charlie" }])

// 7. db.<collection>.find() — Query documents
// > db.students.find()
// { "_id": ObjectId("..."), "name": "Alice", "age": 14, "grade": 9 }
// { "_id": ObjectId("..."), "name": "Bob" }

// Tip: find().pretty() makes it easier to read.