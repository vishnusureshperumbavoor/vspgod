var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "ernakulam" };
  dbo.collection("customers").deleteOne(myquery, (err, obj) => {
    if (err) throw err;
    console.log(obj);
    db.close();
  });
});
