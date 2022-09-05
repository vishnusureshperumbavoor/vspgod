function mydisplayer(temp){
    console.log(temp);
}
let mypromise=new Promise(function(resolve,reject){
    let x =0;
    if(x==0){
        resolve("everthing fine")
    }else{
        reject("error")
    }
})
mypromise.then(
    function(value){
        mydisplayer(value)
    },
    function(error){
        mydisplayer(error)
    }
)

// js object that links producing codes & consuming codes 
// producing codes - code that can take some time 
// consuming codes - code that must wait for the result
// js promise object contains producing code & calls to the consuming codes 