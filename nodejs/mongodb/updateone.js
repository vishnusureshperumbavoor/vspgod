var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: "fathima" };
  var newvalues = { $set: { name: "fathima", address: "onampilly" } };
  dbo.collection("customers").updateOne(myquery, newvalues, (err, obj) => {
    if (err) throw err;
    if (obj) console.log(obj);
    db.close();
  });
});
