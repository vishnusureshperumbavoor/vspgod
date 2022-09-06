var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db("vsp");
    var myobj = {
        name:"company inc",
        address:"highway 37"
    }
    dbo.collection("customers").insertOne(myobj,(err,res)=>{
        if(err)throw err;
        console.log(res);
        console.log("document inserted");
        db.close();
    })
})