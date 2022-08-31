a=20 
b=10 
if a<b:
    print(b)
elif a==b:
    print("===")
else :
    print(a)

print(a) if a>b else print(b)
print(a) if a>b else print("===") if a==b else print(b) 
if b>a:
    pass        # if u want if else statement to be empty 
