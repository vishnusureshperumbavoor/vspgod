girls={"fathima","emina","uthra","fathima"} 
boys={"elon","jeff","mark","fathima"}
print(girls.union(boys))        # return united 2 sets
girls.update(boys)             # does not returns united sets
print(girls)
print(girls.intersection(boys))     # returns the intersection
girls.intersection_update(boys)     # does not return the intersection
print(girls)
print(girls.symmetric_difference(boys))     # returns the difference
girls.symmetric_difference_update(boys)     # does not returns the difference
print(girls)
print(girls.isdisjoint(boys)) # if 2 sets have common element