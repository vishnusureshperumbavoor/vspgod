name="elon"
company="tesla"
price=49
para = "{} is legend. {} is his company. price is {:.2f}"
print(para.format(name,company,price))

# index numbers
para = "{0} is good person. {0} favorite company is {1}"    # u can use index numbers too
print(para.format(name,company))

# named indexes
para = "{name} is a founder. {name} company is {company}"
print(para.format(name="bill",company="microsoft"))
print(para.format(name="page",company="google"))

para ="my name is \"vsp\" you here that"  # " " around vsp
print (para)
a ="my name is \\vsp you here that"  # \ before vsp
print (a)
a ="backs\bpace"  # delete one char befor p
print (a)