from . import AdminService


# !configs
AdminService.config['SECRET_KEY'] = "BFqB_Os_UfGxkTyzzcQOC-acxpLQy0FVZi5obsvjWXU"
# * JWT TOKENS
AdminService.config['JWT_SECRET_KEY'] =  'L3jCQcKRZJ1jqTS4rC1UHEieMCuljN862qzaTYFg70E'
AdminService.config['JWT_TOKEN_LOCATION'] = False
# * DataBase
AdminService.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///DataBase.sqlite3" # todo os.env("path")
AdminService.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

