var http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("hello world\n");
    res.write(req.url)
    res.end();
  })
  .listen(8080);

// http - nodejs's build in module. it allows nodejs to transfer data over the HTTP
// http module can create an http server that listens to server ports and gives a response back to the client
// createServer() to create an http server
// 200 - success // 404 - error
