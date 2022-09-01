import os 
if os.path.exists("temp.txt"):
    os.remove("temp.txt")   # file deletion
else:
    print("file does not exist")

if os.path.exists("temp"):
    os.rmdir("temp")    # folder deletion
else:
    print("folder doesnt exist")