girls=("emina","uthra","ashly")
print(girls)
girls=tuple(("emina","uthra","ashly"))          # tuple constructor
print(girls)
print(len(girls))
girl2=("nasiha")        # if one item exists in tuple it is string
print(type(girl2))
print(girls[1])         # accesssing tuples 
if "emina" in girls:
    print("found emina")
del girls               # to delete tuples