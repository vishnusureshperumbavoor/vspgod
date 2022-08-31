girls=["ashly","aathira","mona","fathima","reshma","aleena","devika","alshi","bhav"]
boys=[]
for x in girls:
    if "s" in x:
        boys.append(x)
print(boys)
boys = [x for x in girls]
print(boys)
boys = girls.copy()
print(boys)
boys = [x for x in girls if "h" in x]
print(boys)
boys = [x if x != "mona" else "emina" for x in girls]
print(boys)
boys = ["vyshak" for x in girls]
print(boys)