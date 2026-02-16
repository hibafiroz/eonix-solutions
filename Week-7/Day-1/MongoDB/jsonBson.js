// JSON v/s BSON:

//JSON: A text-based format to store and exchange data. Easy for humans to read and write.
//It works for simple data types like strings, numbers, booleans, arrays, and objects.
//But Cannot store special types such as Date, ObjectId or high-precision decimals

//BSON: It is a binary version of JSON that computers can read and write faster
//It supports all JSON types plus extra MongoDB-specific types like Date, ObjectId, Decimal128

//Why MongoDB uses BSON internally?

// Supports more data types.
// Faster processing – Binary format is quicker for reading/writing compared to plain text JSON.
// Efficient storage – good for large amounts of data.
// Indexing support.


//What is an Insert Operation?

//An insert operation in MongoDB is the process of adding new data (documents) into a collection.

// 1. insertOne()

// Purpose: Inserts a single document into a collection.
// Syntax:
// db.collectionName.insertOne({
//   key1: value1,
//   key2: value2,
// })

// Example:
db.users.insertOne({
  name: "Hiba",
  age: 25,
  isStudent: true
})
//MongoDB automatically creates an _id for the document if you don’t provide one.

// 2. insertMany()

// Purpose: Inserts multiple documents at once into a collection.

// Syntax:
// db.collectionName.insertMany([
//   { key1: value1, key2: value2 },
//   { key1: value1, key2: value2 },
// ])

// Example:
db.users.insertMany([
  { name: "Ali", age: 22 },
  { name: "Sara", age: 24 },
  { name: "John", age: 26 }
])


//Retrieving data:

//It means getting or reading data from the database.
//We don’t change the data—you just look at it.

// 1. find(): To get documents from a collection.
// Syntax:
      db.collectionName.find(query)
     
// Example: Get all users older than 23:
db.users.find({ age: { $gt: 23 } })
      
//find just one:
db.users.find({ name:'hiba'})

// 2. find().pretty()
// Makes the output formatted and easy to read.
// Syntax:
      db.collectionName.find(query).pretty()
      
// Example: Get all users in a readable format:
      db.users.find().pretty()

// find() → retrieves documents, output may be hard to read.
// find().pretty() → same result, but nicely formatted for readability.

//To find one student's time of creation using id, we use-
db.students.findOne()._id.getTimestamp()
//for multiple students, we use-
db.students.find().forEach(doc => {
  print(doc._id.getTimestamp())
})

// 1. Auto _id

// Every document in MongoDB automatically gets a unique _id field.
// We don’t need to add it manually, MongoDB creates it for us.
// _id ensures that every document can be uniquely identified.
// Example:
     db.users.insertOne({ name: "Hiba", age: 25 })
      
// MongoDB automatically adds _id like:
// {
//   _id: ObjectId("650f4e2f1234abcd5678ef90"),
//   name: "Hiba",
//   age: 25
// }

// 2. ObjectId Structure

// ObjectId is the default type for _id and is 12 bytes long. Its structure:
// 4 bytes → Timestamp (seconds since Unix epoch, shows creation time)
// 5 bytes → Random value (unique to machine/process)
// 3 bytes → Incrementing counter
// This ensures every _id is globally unique.

// 3. Extracting Timestamp from ObjectId

// We can get the creation time of a document using:
      ObjectId("650f4e2f1234abcd5678ef90").getTimestamp()
// Returns a Date object showing when the document was created.