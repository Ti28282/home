
from app import AdminService
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
import asyncio
from flask_restful import Api

# !.env vars
import os



# * Routes
from .routes import AdminAuth, Admin, UsersModel


# *name routes
LOGIN = "/AdminAuth/"


# !configs
AdminService.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_PATH') # todo os.env("path")
AdminService.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# todo Database connect
db = SQLAlchemy(AdminService) 

with AdminService.app_context(): 
    db.create_all()



# todo For registered users
# !Sign In
login_manager = LoginManager()
login_manager.init_app(AdminService)
login_manager.login_view = LOGIN







api = Api(AdminService) # *API

api.add_resource(AdminAuth,LOGIN)

