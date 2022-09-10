class car:
    num=100
    def displaynumber(self):
        print("number here is ",self.num)

print(car.num)
obj = car 
obj.displaynumber(obj)
print(obj.num);
obj.num="tesla"
print(obj.num)

del obj.num
del obj
del car

# self parameter - first parameter of any function in a class. it refers to the current instance of the class