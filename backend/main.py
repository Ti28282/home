from flask import Flask
from flask_restx import Api, Resource, fields


auth = Flask("__Server__")

rest_api = Api(version="1.0", title="Authification API")

