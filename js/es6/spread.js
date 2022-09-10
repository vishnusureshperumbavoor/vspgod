num1=[11,22,33]
num2=[44,55,66]
num3=[...num1,...num2]
console.log(num3);
[a,b,...rest]=num3
console.log(rest);
vehicle={
    brand:'ford',
    model:'mushtang'
}
vehicle2={
    type:'car'
}
vehicle3 = {...vehicle,...vehicle2}
console.log(vehicle3);
