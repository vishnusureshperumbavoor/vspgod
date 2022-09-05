setTimeout(iloveyou,1000)
function iloveyou(){
    console.log("i love u");
}
setTimeout(function ihateu(){
    console.log("i love u 2");
},2000)
function ihateyou(data){
    console.log(data);
}
const mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i love u 3")
    },3000)
}).then((data)=>{
    console.log(data);
})