from flask import jsonify, request, Response
from flask_restful import Resource
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    set_access_cookies,
    set_refresh_cookies,
    unset_access_cookies,
    unset_jwt_cookies,
    get_jwt_identity,
    
)
from datetime import timedelta
import logging
from Auth.models.users import Users, db



logging.basicConfig(filename='record.log', level=logging.DEBUG, format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')


class Register(Resource):
    
    def post(self):
        req_data: Response = request.get_json()
        
        _login: str  = req_data.get("login")
        _password: str = req_data.get("password")

        try:
            new_user = Users(login = _login)
            new_user.set_password(_password)
            db.session.add(new_user)
            db.session.commit()

            return jsonify(status = "OK"), 200
        
        except Exception as e:
            logging.error(e)
            return jsonify(Error = e), 401


class Login(Resource):


    def post(self):
        # _password => check_user 
        req_data: Response = request.get_json()


        _login = req_data.get("login")
        _password = req_data.get("password") 

        try:
            check_user = Users.query.filter_by(_login = _login).first()
            
            if check_user:

                access_token = create_access_token(identity = _login, fresh = timedelta(hours = 1))
                refrech_token = create_refresh_token(identity = _login)
                set_refresh_cookies(refrech_token, encoded_refresh_token = "utf-8")

                return jsonify(access_token = access_token), 200
            
            return jsonify(Error = "Bad login or password"), 401


        except Exception as e:
            logging.error(e)
            
            return jsonify(Error = e), 401


class Logout(Resource):


    @jwt_required()
    def delete(self):
        unset_jwt_cookies()
        return jsonify(msg = "logout successful"), 200


class TokenRefresh(Resource):

    @jwt_required(refresh=True)
    def post(self):
        
        indentity = get_jwt_identity()
        access_token = create_access_token(indentity = indentity, fresh = False)


        return jsonify(access_token = access_token), 200


class Protected(Resource):

    @jwt_required(fresh = True)
    def get(self):
        current_user = get_jwt_identity()
        return jsonify(login_in_as = current_user), 200




