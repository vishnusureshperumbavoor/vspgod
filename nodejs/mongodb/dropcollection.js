var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop((err, obj) => {
    if (err) throw err;
    if (obj) console.log(obj);
    db.close();
  });
});
