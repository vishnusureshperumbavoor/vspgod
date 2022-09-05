var fs = require("fs");
fs.appendFile('index.txt','appended',(err)=>{
    if(err) throw err;
    console.log("everyting fine");
});
