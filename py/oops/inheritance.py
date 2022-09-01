class person:
    def __init__(self,first,last):
        self.fname = first 
        self.lname = last 
    def display(s):
        print(s.fname,s.lname)

class student(person):      # dispatched the parent class as a parameter
    pass
p = student("vsp","suresh")
p.display();

class topper(person):
    def __init__(self,first,last):
        person.__init__(self,first,last)
t = topper("fathima","sulaiman")
t.display();

class tholvi(person):
    def __init__(s,first,last):
        super().__init__(first,last)        # super function make child class inherits all methods and properties from patent
t = tholvi("asif","pk") 
t.display()