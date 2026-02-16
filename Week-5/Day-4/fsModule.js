// Fs module
// The fs module stands for file system
// it allow to work with the file system such as creating, reading, updating, deleting, and renaming files and folders
// Fs is used to logging, saving user uploads etc…

// We use it as:

 const fs = require('fs');

// Common Methods in fs are-

// fs.writeFileSync()	-Creates/writes file (sync)
// fs.writeFile()	--Creates/writes file (async)
// fs.readFileSync()	-Reads file content (sync)
// fs.readFile()-	Reads file content (async)
// fs.appendFile()	-Appends data to a file
// fs.unlink()	-Deletes a file
// fs.mkdir() / fs.rmdir()	-Creates or removes folders
// fs.readdir()	-Reads contents of a directory
// fs.rename()-	Renames a file or folder

// Syntax:

Fs.writeFile(path,content,callback)

// fs.writeFile() - is an asynchronous method used to create a new file or overwrite an existing file with the specified content.
// It’s asynchronous, so Node.js doesn't wait — the code continues while the file is being written.
// If the file already exists, its content will be overwritten.
// Use fs.appendFile() if we want to add content instead of overwriting.


const fs = require('fs');
fs.writeFile('example.txt', 'Hello from Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File created and written successfully!');
  }
});


// What is the difference between fs.writeFile() and fs.writeFileSync()

// fs.writeFile() is asynchronous and uses a callback
// fs.writeFileSync() is synchronous and blocks the code and doesn’t use a callback


// Fs.readFile

// fs.readFile() is a core method used to read the contents of a file asynchronously

 fs.readFile(path, encoding, callback)

//   path – Path to the file 
//   encoding –  Encoding like 'utf-8'
//   callback –  function with parameters (err, data)


const fs = require('fs');
fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});

// If we skip utf-8
//      We will get raw buffer data instead of readable text

     fs.readFile('example.txt', (err, data) => {
    console.log(data); // Output: <Buffer 48 65 6c 6c 6f ...>
});


// Fs.appendFile

// fs.appendFile() is an asynchronous method. fs module that adds data to the end of a file
//  If the file doesn’t exist it will create the file and then write the content
// if log.txt exists it adds "New log entry" to the end

 fs.appendFile(path, data, callback)


 const fs = require('fs');
fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) {
    console.error('Error appending file:', err);
  } else {
    console.log('Data appended successfully!');
  }
});

writeFile()	//Overwrites the file content
appendFile()	// Adds to the end of the file


// fs.unlink()

// fs.unlink() is an asynchronous method from Node.js’s built-in fs module It is used to delete a file from the file system
// fs.unlink(path, callback)

const fs = require('fs');
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully!');
  }
});

// If the file doesn't exist it throws an error in the callback


//example
const express=require("express")
const app=express()
const fs=require("fs")
const port=3010

const fileName='studentsFs.txt'

app.get('/write',(req,res)=>{
    fs.write(fileName,'Hello this is Hiba Firoz',(err)=>{
        if(err){
           return res.status(500).send('Error Occured')
        }else{
            res.send('Written Successfully')
        }
    })
})

app.get('/read',(req,res)=>{
    fs.read(fileName,'utf-8',(err,data)=>{
        if(err){
           return res.status(500).send('Error Occured')
        }else{
            res.send('Your data is',data)
        }
    })
})

app.get('delete',(req,res)=>{
    fs.unlink(fileName,(err)=>{
        if(err){
           return res.status(500).send('No file Exist')
        }else{
            res.send('File Deleted Successfully')
        }
    })
})

app.get('/append',(req,res)=>{
    fs.appendFile(fileName,'Grade is A+',(err)=>{
       if(err){ 
       return res.status(500).send('Error Occured')
       }else{
    res.send('File Added Successfully')}
    })
})

app.get('/exist',(req,res)=>{
    const exist=fs.existsSync(fileName)
    res.send(exist?'Exist':'Not Exist')
})

app.listen(port)