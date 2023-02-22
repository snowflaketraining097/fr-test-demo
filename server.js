// server.js
const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
 })
  .listen(PORT, () => console.log('Listening on', PORT))
