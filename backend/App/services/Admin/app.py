from flask import Flask, jsonify, request
from flask_cors  import CORS




# !.env vars
import os


# !Settings

AdminService = Flask("Admin")
AdminService.config['API_KEY'] = os.environ.get('API_KEY')
CORS(AdminService) # *CORS 