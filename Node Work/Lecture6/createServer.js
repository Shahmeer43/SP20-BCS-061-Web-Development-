console.clear();
const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url == "/") {
      res.write("<h1>Home Page<h1/>");
      console.log(req.url);
    } else if (req.url == "/products") {
      res.write("<h1>Products<h1/>");
      console.log(req.url);
    } else {
      res.write("Page not found");
    }

    res.end();
  })
  .listen(8080);
