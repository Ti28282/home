# services/Admin/__init__.py

import os
from flask import Flask, jsonify, request

from flask_cors  import CORS
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, login_required, current_user


ERROR_MESSAGE = "Doesn't exist method "
LOGIN = "/AdminAuth/"
MAIN = "/"


    

# !Settings

AdminService = Flask("Admin")
AdminService.config['API_KEY'] = os.environ.get('API_KEY')
CORS(AdminService) # *CORS 

# !.env vars
import os




# !configs
AdminService.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_PATH') # todo os.env("path")
AdminService.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# todo Database connect
db = SQLAlchemy(AdminService) 

# * DataBase Model
class Users(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    login = db.Column(db.String(20), nullable = False, unique = True)
    password = db.Column(db.String(25), nullable = False)


    def __init__(self, login, password):
        self.login = login
        self.password = password


    def __repr__(self):
        return f'<User {self.login}>'

# todo For registered users
# !Sign In
login_manager = LoginManager()
login_manager.init_app(AdminService)
login_manager.login_view = LOGIN


# API 
from .routes import Auth, Login, Systeminfo

api = Api(AdminService)

api.add_resource(Auth, "/user/auth") 
api.add_resource(Systeminfo, "/user/systeminfo")