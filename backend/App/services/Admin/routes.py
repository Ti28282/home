from . import AdminService, db, Users
from flask_restful import Resource
from flask import request, jsonify


MESSAGE = "Message"
WARNING = "Warning"
ERROR = "ERROR"


class Auth(Resource):
    """
    # Edit and Make

    Exapmles:
    GET:{'Message':'The method is not allowed for the requested URL.'} And Other
    POST:{ 'login':'UserLogin', 'password':'UserPassword'}
    PUT:{} 
    DELETE:{}
    """
    
    # post only upload to DB

    def post(self):

        account = request.json
        Account_login = account.get("login") if account.get("login").isalpha() else None
        Account_password = account.get("password") if account.get("password").isalpha() else None
        status = bool(Account_login and Account_password)

        if status:

            # check user does't exist  to db
            user = Users(Account_login,Account_password)

            # Append to DB
            db.session.add(user)
            db.session.commit()

            return jsonify({MESSAGE:"User was upload","account":{"login":Account_login,"password":Account_password}})

        return jsonify({MESSAGE:"Not 'login' or 'password'"})

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
        
        pass

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
        login = account.get("login")

        if id_:

            # delete account for id

            pass

        elif login:
            # delete account for login
            pass

        else:
            return jsonify({ERROR:""})

class Login(Resource):
    """
    Check Exist user in DB if True upload
    """
    
    def post(self):
        pass