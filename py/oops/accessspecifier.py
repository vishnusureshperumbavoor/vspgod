class student:
    studentname = None                          # protected variables
    studenttech = None 
    def __init__(s,name,tech):
        s.studentname=name 
        s.studenttech=tech 
    def studentdisplay(s):                      # protected function
        print(s.studentname,s.studenttech)      # accessing protected variables

class child(student):
    def __init__(s,name,tech):
        student.__init__(s,name,tech) 
    def display(s):                        # public function
        print(s.studentname,s.studenttech) # accessing protected variables
        s.studentdisplay()                 # accessing protected function

b=child("fathima","python")
b.display()
print()

class temp3:
    firstname = None                        # private members
    techname = None 
    def __init__(s,name,tech):
        s.firstname=name 
        s.techname=tech 
    def displaytemp(s):                     # private function
        print(s.firstname,s.techname)       # accessing private data members
    def displaytemp2(s):                    # pulic member fuction
        s.displaytemp()                     # accessing private memeber function

t=temp3("vsp","python")
t.displaytemp2();
