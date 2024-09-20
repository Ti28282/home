import asyncio
from flask import jsonify , request
from flask_restful import Resource
from .models import UsersModel , db




# * Route Auth

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
                        user = UsersModel(login_ = login, password_ = password)
                        db.session.add(user)
                        return jsonify({"status":"successfully","message":"Data save"}) 
                

        def delete(self):
                # find id or login and delete account
                data = request.json
                login = data.get("login")
                password = data.get("password")


# * Route Admin
# todo will @loginManager
class Admin(Resource):
        pass

                        



    
    
