var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if(err)throw err;
  var dbo = db.db("mydb")
  dbo.createCollection("customers",(err,res)=>{
    if(err) throw err;
    console.log("collection created");
    db.close()
  })
});
// collection is not created until its gets content