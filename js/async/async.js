function temp(data){
    console.log(data);
}
async function myfunction(){
    return "hello world"
}
myfunction().then(
    function(value){
        temp(value)
    },
    function(error){
        temp(error)
    }
)

// async - makes function returns a promise 
// await - makes function wait for a promise