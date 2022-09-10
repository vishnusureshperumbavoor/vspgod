setTimeout(iloveu, 1000);   // callback using function name
function iloveu() {
  console.log("i love u");
}
setTimeout(function iloveu2() { // callback using whole function
  console.log("i love u 2");
}, 2000);

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i love u 3");
  }, 3000);
}).then((data) => {
  console.log(data);
});
