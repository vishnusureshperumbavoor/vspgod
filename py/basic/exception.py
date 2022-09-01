try:
    print(x)
except NameError:
    print("variable x is not defined")
except:
    print("exception")
finally:
    print("prints anyway")  
print()

x=10
try:
    print(x)
except:
    print("exception")
else:
    print("prints only if try prints")   # if no problem in the program else prints
print()

try:
    f = open("demo.txt")
    try:
        f.write("lorem ipsum")
    except:
        print("error")
    finally:
        f.close() 
except:
    print("cant open file")
