class Car {
  constructor(name) {
    this.brand = name;
  }
  display() {
    return "the brand is " + this.brand;
  }
}
class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model=mod;
    }
    show(){
        return this.display() + '. it is a ' + this.model
    }
}
obj = new Model("Ford","Mushtang")
console.log(obj.show())