from backend.main import rest_api
from flask import jsonify, request
from flask_restx import Resource, fields

MAIN_ROUTE = "/api/users/"

signup_model = rest_api.model(
    "SignUpModel", {
        "login": fields.String(required=True, min_length=4, max_length=64),
        "password": fields.String(required=True, min_length=4, max_length=16)
    }
)


@rest_api.route(MAIN_ROUTE + "register")
class Register(Resource):
    """
    Регистрация нового пользователя в базе данных с использованием подели `signup_model`.
    """
    @rest_api.expect(signup_model, validate=True)
    def post(self):
        req_data = request.get_json()

        _login  = req_data.get("login")
        _password = req_data.get("password")

        # todo save hash password to server postgersql service
        


        return jsonify()
    














