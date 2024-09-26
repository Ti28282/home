from . import AdminService
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
    

    def post(self):

        account = request.json
        Account_login = account.get("login") if account.get("login").isalpha() else None
        Account_password = account.get("password").isalpha() if account.get("password").isalpha() else None
        status = bool(Account_login and Account_password)

        if status:

            # check user does't exist  to db


            # Append to DB

            return jsonify({MESSAGE:"User was upload"})

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
        
        
        pass