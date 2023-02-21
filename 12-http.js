const http = require('http');

//first param is incoming request
//params are objects
//second param is what we're sending back 
//web server listen for request
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
    })
    
    server.listen(5000)