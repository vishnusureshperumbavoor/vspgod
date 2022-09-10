class Car{
    constructor(name){
        this.brand=name;
    }
    display(){
       console.log("the brand is " + this.brand); 
    }
}
obj = new Car("ford")
console.log(obj.brand)
obj.display()