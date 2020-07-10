const http = require("http");
const serverName = 8080;
let fs = require("fs");
let handler = function (req, res) {
  console.log(req.url);
  if (req.url == "/OktaLogin.html") {
    data = fs.readFileSync("OktaLogin.html", "utf8");
    res.write(data);
  }

  if (req.url == "/Oktacss.css") {
    data = fs.readFileSync("Oktacss.css", "utf8");
    res.write(data);
  }

  if (req.url == "/content.html") {
    data = fs.readFileSync("content.html", "utf8");
    res.write(data);
  }

  res.end();
};
console.log("server", serverName);
let server = http.createServer(handler);
server.listen(8080);
