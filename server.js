const http = require("http");
const serverName = 8080;
let fs = require("fs");
let handler = function (req, res) {
  console.log(req.url);
  if (req.url == "/login.html") {
    data = fs.readFileSync("login.html", "utf8");
    res.write(data);
  }

  res.end();
};
console.log("server", serverName);
let server = http.createServer(handler);
server.listen(8080);
