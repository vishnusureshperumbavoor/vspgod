x = lambda a : a+20 
print(x(5))
x = lambda a,b : a*b 
print(x(3,30))

def mul(num):
    return lambda a:a*num;
doubler = mul(2) 
print(doubler(20))

# small anonymous function 
# can take any number of arguements (a,b,c). but only one expression
# we can use lambda as an anonymous function inside another function 
# function that takes one arguement and that arguement will be multiplied with an unknown number