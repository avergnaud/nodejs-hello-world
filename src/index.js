const http = require('http'); 
const math = require("./math.js");

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    console.log(req.headers);

    const result = math.add(2,4);

    res.statusCode = 200;
    res.end(`<h1>Hello, World! ${result}</h1>`);
});
server.listen(port, hostname);