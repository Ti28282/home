
from .config import *
from datetime import datetime, timezone
from flask_sqlalchemy import SQLAlchemy
from . import bcrypt, AdminService


# todo Database connect
db = SQLAlchemy(AdminService) 


# * DataBase Models
class Users(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    login = db.Column(db.String(20), nullable = False, unique = True)
    password = db.Column(db.String(25), nullable = False)
    jwt_auth_active = db.Column(db.Boolean(), default = True)
    date_joined = db.Column(db.String(20), default = f"{datetime.now().day}.{datetime.now().month}.{datetime.now().year} -- {datetime.now().hour}:{datetime.now().minute}:{datetime.now().second}")


    def __init__(
                self, 
                login:str,
                password:str
                ):
        
        self.login = login
        self.password = self.password =  bcrypt.generate_password_hash(password)

    def set_password(
                    self, 
                    password : str
                    ) -> None:
        
        # * Hash password upload
        self.password =  bcrypt.generate_password_hash(password)

    def check_password(
            self, 
            password : str
            ) -> None:
        
        return bcrypt.check_password_hash(self.password, password)

   

    

    


class AdminUsers(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    login = db.Column(db.String(20), nullable = False, unique = True)
    password = db.Column(db.String(25), nullable = False)
    jwt_auth_active = db.Column(db.Boolean())
    date_joined = db.Column(db.DateTime(), default=datetime.now(timezone.utc))





with AdminService.app_context():
    db.create_all()