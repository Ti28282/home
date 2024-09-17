

class Object():
    
    # static vatiables

    Attribute = ""

    def __init__(self,attribute) -> None:
        self.attr = attribute


    def settings(self,rule):
        Attribute = rule
        self.att = rule

    print(Attribute)

    def printAll(self):
        print(self.att)

    def deco(self,func):


        def inner(*args, **kwargs):
            
            print("hello")


            return func(*args, **kwargs)

        return inner
    



mains = Object("data")
mains.settings("this worl rule")



def counter(function):


    def wrapper(*args, **kwargs):
        
        print("hello")
        return function(*args , **kwargs)
    return wrapper


@mains.deco
def datas():
    print("TSE")

datas()