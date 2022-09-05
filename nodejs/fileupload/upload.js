var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
http
  .createServer((req, res) => {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        var oldpath = files.fileupload.filepath;
        var newpath =
          "C:\\wamp64\\www\\vspgod\\nodejs\\fileupload\\images\\" +
          files.fileupload.originalFilename;
        fs.rename(oldpath, newpath, err => {
            if(err) throw err;
            console.log(newpath);
          res.write("file uploaded and moved");
          res.end();
        });
      });
    } else {
      fs.readFile("form.html", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
