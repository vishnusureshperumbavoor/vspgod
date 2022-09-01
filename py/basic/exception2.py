x = -1 
if x<0:
    raise Exception("number less than zero")    # raise an error and stops the program

x = "hello"
if not type(x) is int:
    raise TypeError("not integer") # raise typeerror is x not int