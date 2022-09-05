var fs = require("fs");
fs.open("index.txt", "w", (err,file) => {
  if (err) throw err;
  console.log("empty file index.txt created");
});
