var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log(db);
  console.log("database connected");
  db.close();
});
// database is not created untill its gets content in mongodb