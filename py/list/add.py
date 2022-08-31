# insert, append and extend
a=["emina","uthra","ashly"]
a.insert(4,"python")     # added python to the 4th index using insert function
print(a)
a.append("javascript")
print(a)
c=["emina","uthra","nehala"]
d=["ashly","aathira","mona"]
d.extend(c)                 # extending 2 tuples
print(d)
e=("fathima","reshma","aleena")    
d.extend(e)         # extending tuple to a list
print(d)
f=["vyshak","sigma","vinayak"]
temp = d+f;
print(temp)