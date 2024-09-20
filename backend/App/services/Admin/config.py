from flask_sqlalchemy import SQLAlchemy

class DataBase:
    
    # todo Database connect
    db = SQLAlchemy() 
        
    

class EndPoints:

    LOGIN = "/Auth/"
    MAIN = "/"
    ADMINPANEL = "/AdminAuth"
    ADMINHOME = "/Admin/"
    
