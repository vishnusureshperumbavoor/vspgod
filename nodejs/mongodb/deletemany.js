var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: /^c/ };
  dbo.collection("customers").deleteMany(myquery, (err, obj) => {
    if (err) throw err;
    console.log(obj);
    console.log(obj.deletedCount + " items deleted");
    db.close();
  });
});
