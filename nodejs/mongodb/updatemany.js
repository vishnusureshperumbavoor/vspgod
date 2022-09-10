var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: /^f/ };
  var newvalues = { $set: { name: "uthra", address: "onampilly" } };
  dbo.collection("customers").updateMany(myquery, newvalues, (err, obj) => {
    if (err) throw err;
    if (obj) console.log(obj);
    db.close();
  });
});
