async function display(){
    let mypromise = new Promise((resolve,reject)=>{
        resolve("i love u")
    })
    console.log(await mypromise);
}
display()

// keyword await before a function makes the function wait for a promise 
// let value = await promise 
// the await keyword can be used only inside and async fucntion