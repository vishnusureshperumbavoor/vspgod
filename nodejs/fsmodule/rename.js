var fs = require("fs");
fs.rename("index.txt",'newname.txt', (err) => {
  if (err) throw err;
  console.log("file renamed");
});
