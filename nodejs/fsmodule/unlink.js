var fs = require("fs");
fs.unlink("index.txt", (err) => {
  if (err) throw err;
  console.log("file deleted");
});
