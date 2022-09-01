class first:
    def __init__():
        print("firstclass")
class second:
    def __init__():
        print("secondclass")
class third(first,second):
    first.__init__()
    second.__init__()

t = third 