

# from . import limiter
from flask import request, jsonify
# from .Monitoring import Monitoring, Monitoring_CPU, Monitoring_RAM, Monitoring_SpeedtestDownload , Monitoring_SpeedtestUpload

# from .models import db, Users, AdminUsers, bcrypt # * Update Database
import os


from flask_restful import Resource, fields, marshal_with
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity




MESSAGE = "Message"
WARNING = "Warning"
ERROR = "ERROR"

# system = Monitoring()



singup_model = {
        "login": fields.String(),
        "password": fields.String()
    }


# todo PUT Change
#
# ! JWT token and Session |


class Console(Resource):

    # @limiter.limit("5 per minute")
    def get(self):
        
        os.system("clear")

        return {MESSAGE:"Successful Deleted"}
 

# todo WORK ...

class Login(Resource):
    
    
    @marshal_with(singup_model)
    def post(self):

        req_data = request.get_json()
        
        _login = req_data.get("login")
        _password = req_data.get("password")


        # user_exists = Users.query.filter_by(login = _login).first()

        # if user_exists:

        #     return jsonify({MESSAGE:{"status":True,"JWT_TOKEN":user_exists.jwt_auth_active}})


'''
class Register(Resource):

    @marshal_with(singup_model)
    def post(self):

        req_data = request.get_json()
        
        _login = req_data.get("login")
        _password = req_data.get("password")

        # user_exists = Users.query.filter_by(login = _login).first()
        

        # if user_exists and user_exists.check_password(user_exists, _password):
            # return jsonify({ERROR:{"status":False,"message":"Login already taken"}}), 400
        
        


        # todo Save hash password
        hashed_password = bcrypt.generate_password_hash(_password).decode('utf-8')
        is_valid = bcrypt.check_password_hash(hashed_password, _password)

        if is_valid: 
            new_user = Users(login = _login, password = hashed_password)
            db.session.add(new_user)
            db.session.commit()

            return jsonify({MESSAGE:{
                "success":True,
                "userID": new_user.id,
                "message":"User successful Append [+]"
            }}), 200
        
        return jsonify({ERROR:"Error in validate hash"})
    

class Auth(Resource):
    """
    # Edit and Make

    Exapmles:
    GET: return {data DB}
    POST:{ 'login':'UserLogin', 'password':'UserPassword'}
    PUT:{} 
    DELETE:{}
    """
    @limiter.limit("10 per minute")
    def get(self):
        list_users = []
        
        user_datas = Users.query.all()
        for user in user_datas:
            users = {}
            users["id"] = user.id
            users["login"] = user.login
            
            users["jwt_auth_active"] = user.jwt_auth_active
            users["date_joined"] = user.date_joined
            list_users.append(users)
            

        return jsonify(list_users)
    

    # post only upload to DB
    @limiter.limit("10 per minute")
    @marshal_with(singup_model)
    def post(self):

        account = request.json
        Account_login = account.get("login")
        Account_password = account.get("password")
        
        
        
        # check size login and password
        if len(Account_login) > 4 and len(Account_password) > 5:

            try:
                
                # check user does't exist  to db
                # ! Hash password
                user = Users(login = Account_login,password = Account_password)
                
                    
                # Append to DB
                db.session.add(user)
                db.session.commit()

                    

            except:
                    
                return jsonify({ERROR:"DB error"})
            # :> RETURN JWT-TOKEN
            return jsonify({MESSAGE:"User was upload","account":{"login":Account_login}})
                
        return jsonify({ERROR:"Weak 'login' or 'password' "})

        

    # put for id and login
    
    def put(self):
        """
        {
        'id':0,
        'new':{'login':'UserNewLogin','password':'UserNewPassword'}
        
        OR
        'login':'UserLogin',
        'new':{'login':'UserNewLogin','password':'UserNewPassword'}
        }
        
        """

        account = request.json
        id_ = account.get("id") 
        login_ = account.get("login")
        new_login, new_password = account.get("new").get("login"), account.get("new").get("password")


        if id_:
            AccountId = Users.query.filter_by(id = id_).first()

            AccountId.login = new_login 
            AccountId.password = new_password 

            return jsonify({MESSAGE:"Account update","find":"id"})

        if login_:
            AccountLogin = Users.query.filter_by(login = login_ ).first()
            AccountLogin.login = new_login 
            AccountLogin.password = new_password 

            return jsonify({MESSAGE:"Account update","find":"login"})

        
        else:
            return jsonify({ERROR:"Account didn't find"})

    # delete for id and login

    def delete(self):
        """
        {
        'id':0

        OR
        'login':'UserLogin',
        } -> Account Deleted if exist else Error Not exist 
        
        """
        
        
        account = request.json
        id_ = account.get("id") 
        login_ = account.get("login")

        if id_:

            # delete account for id
            try:
                AccountId = Users.query.filter_by(id = id_).first()
                db.session.delete(AccountId)
                db.session.commit()

                return jsonify({MESSAGE:"Account Deleted","userfind":id_})
            
            except:
                return jsonify({ERROR:"DB error"})

        elif login_:

            try:
                # delete account for login
                AccountLogin = Users.query.filter_by(login = login_).first()
                db.session.delete(AccountLogin)
                db.session.commit()

                return jsonify({MESSAGE:"Account Deleted","userfind":login_})
            except:

                return jsonify({ERROR:"DB error"})
        else:
            return jsonify({ERROR:"Account didn't find"})





class Systeminfo(Resource):
    """
    Return Datas
    Example: 
    {
    'OS':'Name_os',
    'HOST':'Name_host',
    'KERNEL':'Version',
    'UPTIME':'time',
    'SHELL':'Version',
    'CPU':'Name_CPU',
    'GPU':'Name_GPU',
    'MEMORY':'Memory_PC'
    'PING':'PING_PC'
    }
    """
    

    
    def get(self):
        # dict return
        return jsonify(system())

# todo WORK ...
class ImageSave(Resource):
    

    
    def get(self):
        pass

    
    def post(self):
        pass

class InfoCPU(Resource):


    def get(self):

        return jsonify(Monitoring_CPU())


class InfoRAM(Resource):


    def get(self):

        return jsonify(Monitoring_RAM())
    

class SpeedTestDownload(Resource):

    def get(self):

        return jsonify(Monitoring_SpeedtestDownload())

class SpeedTestUpload(Resource):

    def get(self):

        return jsonify(Monitoring_SpeedtestUpload())
'''