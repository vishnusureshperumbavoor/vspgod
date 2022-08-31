def sum(num1,num2):
    return num1 if num1>num2 else num2
num1=20;
num2=10;
print(sum(num1,num2))

def upperkid(*kids):
    print("the middle kid is ",kids[1])
upperkid("elon","kimbal","toska")