import re 
txt="the rain in Spain"
print(re.findall("ai",txt)) # return list
print(re.search("india",txt)) # return None or match
print(re.search("\s",txt)) # white space search
print(re.search("\s",txt).start()) # position of white space 
print(re.split("\s",txt)) # split at every white spaces
print(re.split("\s",txt,1)) # split at 1st white space
print(re.sub("\s","6",txt)) # substitute white spaces with 6
print(re.sub("\s","6",txt,2)) # substitute 1st 2 white spaces with 6
print(re.search(r"\bS\w+",txt).span()) # word start with S. printing its position and total characters
print(re.search(r"\bS\w+",txt).group()) # word start with S. printing the word