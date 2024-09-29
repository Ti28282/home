from . import AdminService, db, Users
from flask_restful import Resource
from flask import request, jsonify
from .Monitoring import Monitoring

MESSAGE = "Message"
WARNING = "Warning"
ERROR = "ERROR"
system = Monitoring()

class Auth(Resource):
    """
    # Edit and Make

    Exapmles:
    GET: return {data DB}
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
            # check size login and password
            if len(Account_login) > 4 and len(Account_password) > 5:

                try:
                    # check user does't exist  to db
                    user = Users(Account_login,Account_password)

                    # Append to DB
                    db.session.add(user)
                    db.session.commit()
                except:
                    return jsonify({ERROR:"DB error"})
                
                return jsonify({MESSAGE:"User was upload","account":{"login":Account_login,"password":Account_password}})

            return jsonify({ERROR:"Weak 'login' or 'password' "})

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

class Login(Resource):
    pass


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
    }
    """
    

    
    def get(self):
        # dict return
        return jsonify(system())