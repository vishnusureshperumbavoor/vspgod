var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: /^p/ };  // finding using regex. address starts with p
  dbo
    .collection("customers")
    .find(query)
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      console.log(res[0].name);
      db.close();
    });
});
