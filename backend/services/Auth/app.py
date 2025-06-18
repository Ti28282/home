from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


from routes import Register, Login
from config import Config





app = Flask("__Server__")
app.config.from_object(Config)


db = SQLAlchemy(app)

# todo Migrate
migrate = Migrate(app, db)

RestApi = Api(app)

RestApi.add_resource(Register, "/api/users/register")
RestApi.add_resource(Login, "/api/users/login")




if __name__ == "__main__":
    app.run(host = "0.0.0.0",port = 5051)