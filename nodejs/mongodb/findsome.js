var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("customers")
    .find(
      {},
      {
        projection: {
            _id:0,  // to display only name
            name:1,
        },
      }
    )
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      console.log(res[2].name);
      db.close();
    });
});
