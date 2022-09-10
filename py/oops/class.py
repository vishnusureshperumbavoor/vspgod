class car:
    def __init__(self,name):
        self.brand = name
    def display(self):
        print("name of the brand is ",self.brand)

obj = car("Ford")
print(obj.brand)
obj.display()