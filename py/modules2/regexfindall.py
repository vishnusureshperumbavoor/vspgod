import re 
txt = "hello, rain. in! 59? Spain"

# meta characters
print(re.findall("^hello",txt)) # hello should be at the beginning
print(re.findall("hello$",txt)) # string should end with hello
print(re.findall("rai.*n",txt)) # word start with 'rai', something in the middle, end with 'n'
print(re.search("^hello.*Spain$",txt)) # start with 'hello' end with 'Spain'
print(re.findall("he..o",txt)) # word start with 'he' then 2 characters then o
print(re.findall("vsp|rain",txt)) # string contain vsp or rain

# special sequences
print("b = ",re.findall(r"\bain",txt)) # ain present at the beginning of a word
print(re.findall("\d",txt)) # print all digits
print(re.findall("\D",txt)) # print all no digits
print(re.findall("\s",txt)) # returns whitespace characters
print(re.findall("\w",txt)) # returns word characters
print(re.findall("\W",txt)) # .!?,whitespaces (non words)

#sets
print(re.findall("[arn]",txt)) # a or r or n
print(re.findall("[^arn]",txt)) # except a or r or n
print(re.findall("[a-n]",txt)) # a to n
print(re.findall("[0123]",txt)) # 0 or 1 or 2 or 3
print(re.findall("[0-9]",txt)) # 0 to 9
print(re.findall("[0-5][6-9]",txt)) # 2 digit numbers (1st digit 0 to 5, 2nd digit 6 to 9)
print(re.findall("[a-zA-Z]",txt)) # a to z. lower case or upper case
print(re.findall("[+]",txt)) # +*.|()${}