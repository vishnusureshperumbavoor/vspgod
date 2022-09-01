import json                                             # dont give filename json.py

y = json.loads('{"name":"john","tech":"python"}')       # object to dictionary
print(y["tech"])
          
print(json.dumps({                                      # json hates python sets
    "name":"vsp","age":22
}))                                                     # dictionary to object
print(json.dumps(["elon","jeff"]))                      # list to array
print(json.dumps(("elon","jeff")))                      # tuple to array
print(json.dumps("jeff"))                               # str to String
print(json.dumps(100))                                  # int to Number
print(json.dumps(10.71))                                # float to Number
print(json.dumps(True))                                 # True to true
print(json.dumps(False))                                # False to false
print(json.dumps(None))                                 # None to null
