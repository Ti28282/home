from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager

from .config import Config


app = Flask("__Server__")
app.config.from_object(Config)
jwt = JWTManager(app)

from backend.services.Auth.views import Register, Login, Logout

RestApi = Api(app)

RestApi.add_resource(Register, "/api/users/register")
RestApi.add_resource(Login, "/api/users/login")
RestApi.add_resource(Logout, "/api/users/logout")


if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 5051)