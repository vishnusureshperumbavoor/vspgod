obj = new Map();
obj.set("vsp", "web");
obj.set("vyshak", "android");
obj.set("vinayak", "ML");
obj.set("vsp", "blockchain"); // web has been updated
console.log(obj.has("vsp")); // true
console.log(obj.has("ML")); // false
for (a of obj) console.log(a);
for ([a] of obj) console.log(a);
for ([a, b] of obj) console.log(a, b);