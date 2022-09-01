import json
vsp={                              # json hates python sets
    "name":"vsp",
    "age":22,
    "married":False,
    "fans":["emina","uthra"],
    "children":("tony","stark"),
    "cars":[
        {"model":"tesla","size":108},
        {"model":"ford","size":109}
    ],
}
print(json.dumps(vsp,indent=5))                                    # indent increases sexiness
print()                                         
print(json.dumps(vsp,indent=4,separators=(". "," = ")))            # seperated by = and .
print(json.dumps(vsp,indent=4,sort_keys=True))                     # alphabetical oreder