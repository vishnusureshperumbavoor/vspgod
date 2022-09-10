var arr = [
  24,
  "spacex",
  [
    { name: "vsp", tech: "js" },
    { name: "elon", tech: "ethereum" },
  ],
  function() {
    console.log("anonymous function inside an array");
  },
];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for(n of arr)
    console.log(n);
arr.forEach(data=>console.log(data))
arr.map(data=>console.log(data))
arr[3]()
