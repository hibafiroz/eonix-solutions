//The path module provides utilities for working with file and directory paths
// it helps to construct, normalize andd join in a way that works across dffrent operating systems (Windows, Linux, macos)
//Import as-

const path = require('path');

path.join()	//Joins path segments together 
path.resolve()	//Resolves to an absolute path	
path.basename()	//Returns the filename from a path	
path.dirname()	////Returns the directory of a path	
path.extname()	//Returns the  extension
path.parse()	//Returns path parts as an object	
path.format()	//Builds path from an object	

const path = require('path');
const filePat = '/users/hiba/projects/index.html';

console.log('Directory:', path.dirname(filePath));     // /users/hiba/projects
console.log('Filename:', path.basename(filePath));     // index.html
console.log('Extension:', path.extname(filePath));     //.html
const fullPath = path.join('public', 'images', 'logo.png');
console.log('Joined Path:', fullPath);                 // public/images/logo.png
const absPath = path.resolve('src', 'app.js');
console.log('Absolute Path:', absPath);                // /absolute/path/src/app.js


//__dirname usage

const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'data.txt');
fs.writeFile(filePath, 'Hello', (err) => {
  if (err) throw err;
  console.log('File created at:', filePath);
});


// If file is located at:
/Users/hiba/projects/
// Then the output will be

//File created at:
 /Users/hiba/projects/data.txt

//__dirname gives absolute directory path of the current file
path.join(__dirname, 'data.txt') //combines the directory with data.txt


//exmaple
const express=require("express")
const app=express()
const fs=require("fs")
const port=3011
const path=require('path')

const filePathh=path.join(__dirname,'sample.txt')

app.get('/write',(req,res)=>{
    fs.writeFile(filePath,'Hello there',(err)=>{
        if(err){
            return res.status(500).send('Error')
        }else{
            res.send('Written successfully')
        }
    })
})

app.get('/read',(req,res)=>{
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            return res.status(500).send('Error')
        }else{
            res.send(data)
        }
    })
})

app.listen(port)