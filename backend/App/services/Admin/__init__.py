from flask import Flask, jsonify, request
from flask_cors  import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
import asyncio
from flask_restful import Api

# !.env vars
import os



# * Routes
from .routes import AdminAuth, Admin

# !Settings

AdminService = Flask("Admin")
AdminService.config['API_KEY'] = os.environ.get('API_KEY')
CORS(AdminService) # *CORS 


#! OFF db = SQLAlchemy(AdminService) # *SqlAlchemy 


# !configs
AdminService.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_PATH') # todo os.env("path")
AdminService.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# todo make microservice for Admin and Main pages
# *name routes
LOGIN = "/AdminAuth/"

# todo For registered users
# !Sign In
login_manager = LoginManager()
login_manager.init_app(AdminService)
login_manager.login_view = LOGIN











api = Api(AdminService) # *API

api.add_resource(AdminAuth,LOGIN)

