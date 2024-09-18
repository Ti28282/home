from .config import login_manager
import asyncio
from flask import jsonify , request
from flask_restful import Resource




# * Route Auth
@login_manager
class AdminAuth(Resource):
            
        def get(self):

                return jsonify({"message":"Method GET doesn't exist"})
    
        def post(self):
                
                data = request.json
                login = data.get("login")
                password = data.get("password")

                if  not login and not password or login == "" or password == "":
                        return jsonify({"error":"not login or password"})
                
                else:
                        return jsonify({"error":"not data"}) 


# * Route Admin
# todo will @loginManager
class Admin(Resource):
        pass

                        



    
    
