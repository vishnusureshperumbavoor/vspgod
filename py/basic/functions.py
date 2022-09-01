def sum(num1,num2):
    return num1 if num1>num2 else num2
num1=20;
num2=10;
print(sum(num1,num2))

def upperkid(*kids):                # arbitrary arguements
    print("the middle kid is ",kids[1])
upperkid("elon","kimbal","toska")

def youngkid(child3,child2,child1):         # keyword arguements
    print("younger child is ",child3)
youngkid(child1="elon",child2="kimbal",child3="tosca")

def myname(**name):                     # arbitrary keyword arguements
    print("my last name is ",name["last"])
myname(first="vishnu",last="suresh")

def mycountry(country="India"):         # default parameter
    print("name of my country is ",country)
mycountry()

def mygirls(girls):     # passing list as an arguement
    print(girls)
mygirls(["elon","jeff","warren"])