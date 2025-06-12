from flask import Flask, request, jsonify
from flask_restful import Resource , Api
# ! Application
AdminService = Flask("Admin")



MESSAGE = "Message"
WARNING = "Warning"
ERROR = "ERROR"

list_users = []    





class Auth(Resource): # check exist if not return user doesn't exist put and delete 

    def checkData(self,LOGIN, PASSWORD):
        for user in list_users:
            if LOGIN == user.get("login") and PASSWORD == user.get("password"):
                return jsonify({MESSAGE:"User already exist !!!"})
        
        return jsonify({MESSAGE:"User doesn't exist"})
                
    def post(self):
        data = request.json
        LOGIN = data.get("login")
        PASSWORD = data.get("password")

        if data.get("make"): # ! if True create account to DB else return TEXT user exist
            status =  bool(LOGIN and PASSWORD) 

            if status:
                self.checkData(LOGIN,PASSWORD)
                list_users.append(data)
                
                print(list_users)
                return jsonify({MESSAGE:"User Append to DB"})
            

            
            return jsonify({ERROR:"Not login or password"})

        
        

        if status: 
            self.checkData(LOGIN,PASSWORD)
            
            return jsonify({"message":"User exist"})
        
        
        return jsonify({"error":"not"})
    

    def put(self):
        pass



api = Api(AdminService)


api.add_resource(Auth, "/user/auth")

if __name__ == "__main__":
    AdminService.run()