girls=("emina","uthra","ashly")
boys = list(girls)  # convert tuple to lists
boys[1]="fathima"   # update lists
girls = tuple(boys) # convert lists to tuples
print(girls)        # print tuples

# use insert, append & extend just like this
# same for removal too 

del girls;