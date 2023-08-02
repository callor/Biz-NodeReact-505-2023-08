import http from "http";
// const http = require("http")
http
  .createServer((req, res) => {
    console.log("Hello My Server");
    res.end("<h1>Hello</h1>");
  })
  .listen(8080);
