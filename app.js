const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Node.js is RUN!\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
