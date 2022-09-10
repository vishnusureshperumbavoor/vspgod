var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("orders")
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id", // key in orders collection (local)
          foreignField: "_id",  // key in products collection (foreign)
          as: "orderdetails",
        },
      },
    ])
    .toArray((err, res) => {
      if (err) throw err;
      console.log(JSON.stringify(res)); // left outer join 
      db.close();
    });
});
