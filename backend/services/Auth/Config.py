from os import environ
from backend.main import auth


# !configs
auth.config['SECRET_KEY'] = environ.get("SECRET_KEY")

# * JWT TOKENS
auth.config['JWT_SECRET_KEY'] =  'L3jCQcKRZJ1jqTS4rC1UHEieMCuljN862qzaTYFg70E'
auth.config['JWT_TOKEN_LOCATION'] = False


# * DataBase
auth.config['SQLALCHEMY_DATABASE_URI'] = "" # todo os.env("path")
auth.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False













