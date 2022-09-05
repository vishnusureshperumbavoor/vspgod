var http = require("http");
var url = require('url')
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    var q = url.parse(req.url,true).query;
    console.log(req.url);
    console.log(q);
    var text = q.year + " " + q.month; 
    res.end(text);
  })
  .listen(8080);

// try http://localhost:8080/?year=2017&month=july