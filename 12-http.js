const http = require('http');

// 'req' refers to incoming reequest to the server, 'res' is the response
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('WELCOME TO THE SHITTIEST HOME PAGE');
  }
  if (req.url === '/about') {
    console.log('Here is out shitty history');
  }
  res.end(`<h1>Ooops what the fuck?!?</h1>
  <p>Sorry man, we ain't found shit</p>
  <a href="/">back home </>`);
});

server.listen(5500);
