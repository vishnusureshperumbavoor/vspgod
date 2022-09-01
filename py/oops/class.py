class vsp:
    x=100
    def display():
        print("vsp")
    def printx(s):
        print(s.x)
print(vsp)
print(vsp.x)
x = vsp 
x.display()
x.printx(x)
print()

class student:
    def __init__(self,name,tech):       # constructor
        self.name=name;
        self.tech=tech;
    def display(self):
        print("my name is ",self.name)
n = student("vsp","javascript")
print(n.name);
print(n.tech);
n.display()
n.name="emina"
print(n.name)
del n.name 
del n 
class vsp:
    pass 

# self parameter - first parameter of any function in a class. it refers to the current instance of the class