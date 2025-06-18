
from flask import jsonify, request
from flask_restful import Resource
# Connect to Postgersql
# Save _Login , _Password, _date, 


class Register(Resource):
    """
    Регистрация нового пользователя в базе данных использованием модели `signup_model`.
    """
    
    
    def post(self):
        req_data = request.get_json()

        _login  = req_data.get("login")
        _password = req_data.get("password")

        # todo save hash password to server postgersql service



        return jsonify(login = _login, password = _password)
    

class Login(Resource):


    def post(self):
        


        return jsonify()






