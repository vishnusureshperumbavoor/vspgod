var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = {
        _id:1,
        product_id:154,
        status:1
    }
    dbo.collection("orders").insertOne(myobj,(err,res)=>{
        if(err)throw err;
        console.log(res);
        db.close();
    })
})