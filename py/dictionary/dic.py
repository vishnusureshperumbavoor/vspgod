temp={
    "name":"vsp",
    "tech":"public speaker",
    "year":1999,    # duplicates not allowed
    "year":2000,
    "cars":["teslax","teslay"]      # lists are allowed inside texts
}
print(temp)
print(temp["name"])
print(temp.get("name")) # object oriended approach
print(temp.keys())
print(temp.values())
temp["gf"]="no"     # added new key and value
print(temp)
if "name" in temp:
    print("key exists")
temp["year"]=3000       # changeable
print(temp)
temp.update({"year":4000})      # changeable
print(temp)