girls=["ashly","aathira","mona","Fathima","reshma","aleena","devika","alshi","bhav"] 
girls.sort();        # capital Fathima showed first
print(girls)
girls.sort(reverse=True);       # reversing
print(girls)

girls.sort(key=str.lower)  # avoids the case sensitivity of Fathima
print(girls)
girls.reverse()             # reversing by avoiding the case sensitivity of Fathima
print(girls)