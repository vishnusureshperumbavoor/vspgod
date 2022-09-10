var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    {
      _id: 154,
      name: "chocolate",
    },
    {
        _id:155,
      name: "lemons"
    },
    {
        _id:156,
      name: "vanilla"
    },
  ];
  dbo.collection("products").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log(res);
    console.log(res.insertedCount + " documents inserted");
    db.close();
  });
});