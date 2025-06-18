from dotenv import load_dotenv
from backend.services.Auth.app import app
from os import environ
load_dotenv()

# !configs

class Config:
    SECRET_KEY = environ.get("SECRET_KEY")
    DEBUG = True

    # * JWT TOKENS
    JWT_SECRET_KEY = environ.get("JWT_SECRET_KEY")
    JWT_TOKEN_LOCATION = False

    # * DataBase
    SQLALCHEMY_DATABASE_URI = environ.get("PATH_PSQL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False














