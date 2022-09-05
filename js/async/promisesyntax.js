let mypromise = new Promise((resolve,reject)=>{
    resolve(successdata);
    reject(errordata);
}).then(
    function(value){
        // code if succesfull
    },
    function(error){
        // code is error
    }
)

// js object that links producing codes & consuming codes 
// producing codes - code that can take some time 
// consuming codes - code that must wait for the result
// js promise object contains producing code & calls to the consuming codes 