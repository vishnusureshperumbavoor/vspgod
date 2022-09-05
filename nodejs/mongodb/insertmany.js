var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    {
      name: "fathima",
      address: "onampilly",
    },
    {
      name: "vsp",
      address: "poyya",
    },
    {
      name: "emina",
      address: "ernakulam",
    },
  ];
  dbo.collection("customers").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log(res.insertedCount + " documents inserted");
    db.close();
  });
});
