// Require http module
const http = require('http');
// Require fs module
const fs = require('fs');
// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
var argv = require('minimist')(process.argv.slice(2));
// Define allowed argument name 'port'.
var port_name = 'port'
// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
port = argv[port_name] || 3000
// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./www/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.
var html;
// If there is an error, put it on the console error, return, and exit with error code 1. 
// Do not be nice about exiting.
fs.readFile('./www/index.html', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })

    server.listen(port, () =>{
      console.log(`Server listening on port ${port}`)
  })

  })

  //\commitcommitcommitcommit