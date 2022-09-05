var fs = require("fs");
fs.writeFile("index.txt", "replaced already existed content", (err) => {
  if (err) throw err;
  console.log("everyting fine");
});
