var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = {name:1}
  dbo
    .collection("customers")
    .find()
    .sort(mysort)
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      console.log(res[2].name);
      db.close();
    });
});
