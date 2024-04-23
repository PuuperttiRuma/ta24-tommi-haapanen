import http from "http";

const server = http.createServer((_req, res) => {
  res.write("Hello World!");
  res.end();
});

const port = 3000;

server.listen(port);
console.log("HTTP Server listening port", port);
