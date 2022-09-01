a = open("demo.txt","x")  # creates file 

b = open("demo.txt","r")    # reads file 
print(b.read())

c = open("demo.txt","w")    # overwritten file 
c.write("overwritten file")

c = open("demo.txt","a")    # append file 
c.write("append file")