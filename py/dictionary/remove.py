temp={
    "name":"vsp",
    "tech":"public speaker",
    "year":1999, 
    "cars":["teslax","teslay"] 
}
print(temp)
temp.pop("cars")        # popped cars key
print(temp)
print(temp.popitem())   # popped last key and value
print(temp)
del temp["tech"]        # deleted tech
print(temp)
temp.clear();           # cleared dictionary
del temp;               # deleted dictionary