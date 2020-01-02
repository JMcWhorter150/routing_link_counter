const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html','utf8');
let counter = -1; // start at -1 because you have to increase counter before res.end
const server = http.createServer((req, res) => {
    if (req.url === "/" || parseInt(req.url.slice(1)) || req.url === "/favicon.ico" || req.url === "/0") { // omg this is ugly. Checks if it's main page, 0, a number after the /, and allows favicon.ico requests
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        if (parseInt(req.url.slice(1))) { // changes counter to be whatever was input in the url
            counter = parseInt(req.url.slice(1));
        } // placed before counter up to match functionality of rest of page
        if (req.url !== '/favicon.ico') { // counts up for each request but ignores favicon.ico requests
            counter += 1;
        }
        let content = html.replace("***NUMBER***", counter)
                          .replace("***NUMBER***", counter) // two replaces because don't know regex yet
        res.end(content);
    } else {
        res.writeHead(404, {
            'Content-Type':'text/html'
        });

        res.end("<h1>404: Content Not Found</h1>");
    }
});

server.listen(3004, () => {
    console.log(`listening on port 3004`);
});