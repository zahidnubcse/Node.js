const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    res.writeHead(202, {'Content-type':'text/plain'}); //if we want to add html tag in res.write then we use text/html 
    res.write('Hello.This is my first server');
    res.end();
});

myServer.listen(port, hostname, () => {
    console.log(`Server is running successfully at http://${hostname}:${port}`);
});