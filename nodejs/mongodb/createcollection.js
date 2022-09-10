var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if(err)throw err;
  var dbo = db.db("mydb")
  dbo.createCollection("products",(err,res)=>{
    if(err) throw err;
    console.log(res);
    db.close()
  })
});
// collection is not created until its gets content
// createCollection() received 2 parameters - 1. collection name 2. callback function