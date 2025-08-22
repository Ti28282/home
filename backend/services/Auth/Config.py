from dotenv import load_dotenv
from os import environ
from datetime import timedelta

load_dotenv()

# !configs

class Config:
    SECRET_KEY = environ.get("SECRET_KEY")
    DEBUG = True

    # * JWT TOKENS

    # * DataBase
    SQLALCHEMY_DATABASE_URI = environ.get("PATH_PSQL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # * JWT Settings
    JWT_SECRET_KEY = environ.get("JWT_SECRET_KEY")
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours = 1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days = 30)
    JWT_COOKIE_SECURE = False
    JWT_TOKEN_LOCATION = ["cookies", "json"]













