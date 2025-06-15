# services/Admin/__init__.py

import os
from flask import Flask

from flask_cors  import CORS
from flask_restful import Api
from flask_bcrypt import Bcrypt

from flask_talisman import Talisman
from flask_limiter import Limiter 
from flask_limiter.util import get_remote_address
import redis


ERROR_MESSAGE = "Doesn't exist method "
LOGIN = "/AdminAuth/"
MAIN = "/"


    

# !Settings

AdminService = Flask("Admin")

CORS(AdminService) # *CORS 

# hash 
bcrypt = Bcrypt(AdminService) 


# Flask-Talisman для заголовков безопасности
Talisman(AdminService, content_security_policy = None)

# Limiter ограничение запрсов
# ! Реализовать через Redis или Memcached
limiter  = Limiter(get_remote_address,app = AdminService)
limiter.init_app(AdminService)

# ! Redis

redis_client = redis.Redis(host="localhost", port=6379, db=0)


# REST FUL API
RestApi = Api(AdminService)

from .routes import Console, Systeminfo, Auth, Login, Register, InfoCPU, InfoRAM, SpeedTestDownload, SpeedTestUpload
RestApi.add_resource(Console, "/user/clear")
RestApi.add_resource(Systeminfo, "/user/systeminfo")

RestApi.add_resource(InfoCPU, "/user/systeminfo/CPU") 
RestApi.add_resource(SpeedTestDownload, "/user/systeminfo/DOWNLOAD")
RestApi.add_resource(SpeedTestUpload, "/user/systeminfo/UPLOAD")

RestApi.add_resource(InfoRAM, "/user/systeminfo/RAM")


RestApi.add_resource(Auth, "/user/auth")
RestApi.add_resource(Login, "/user/login")



# todo Maybe I'll Delete
RestApi.add_resource(Register, "/user/register")



        


