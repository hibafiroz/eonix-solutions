const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer((req, res)=>{
  // Routing
  if(req.url==='/' && req.method==='GET') {
    // Serve HTML page
    fs.readFile(path.join(__dirname,'index.html'),(err, data)=>{
      if(err){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.end('Server Error');
      }else{
        res.writeHead(200,{ 'Content-Type': 'text/html'});
        res.end(data);
      }
    });

  }else if (req.url==='/data' && req.method==='GET'){
    // API route for fetching data
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello from Node.js server!');

  }else if(req.url==='/about' && req.method==='GET'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About page.');

  }else if(req.url === '/contact' && req.method === 'GET'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Contact page.');

  }else{
    //404 fallback
    res.writeHead(404,{ 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000,()=>{
  console.log('Server running at http://localhost:3000/');
});
