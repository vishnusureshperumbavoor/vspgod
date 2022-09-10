var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("customers")
    .find()
    .limit(3) // to show only 1st 3 documents
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
