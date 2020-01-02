const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/html'
    })
    res.end('<h1>stuff</h1>');
});

server.listen(3004, () => {
    console.log(`listening on port 3004`);
});