const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*' // allows to fetch from the browser
  });

  if (req.url === '/') {
    res.end('Hello everyone...');
  } else if (req.url === '/about') {
    res.end('About page');
  } else {
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
