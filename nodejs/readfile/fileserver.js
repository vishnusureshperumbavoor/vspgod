var http = require("http");
var url = require('url')
var fs = require('fs')
http
  .createServer((req, res) => {
    var q = url.parse(req.url,true)
    var filename = "." + q.pathname;
    fs.readFile(filename,(err,data)=>{
      if(err){
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404 not found");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      return res.end();
    })
  })
  .listen(8080);

// try https://localhost:8080/plustwo.html
// try https://localhost:8080/diploma.html

// in fsmodule readFile we pass the filename. here it is on url