a = open("C:\\Users\\LENOVO\\Desktop\\vspgod\\js\\basic\\temp.txt")
print(a.read())
print()
b = open("C:\\Users\\LENOVO\\Desktop\\vspgod\\js\\basic\\temp.txt")
print(b.read(5))    # 1st 5 characters
print()
c = open("C:\\Users\\LENOVO\\Desktop\\vspgod\\js\\basic\\temp.txt")
print("1st line = ",c.readline()) # 1st line
print("2nd line = ", c.readline()) # 2nd line
c.close()
