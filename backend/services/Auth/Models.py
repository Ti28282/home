
from sqlalchemy import Column, String, Integer, DateTime, func
from backend.services.Auth.app import app, db
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

class Users(db.Model):

    id = Column(Integer(), autoincrement = True, primary_key = True)
    login = Column(String(80), nullable = False, unique = True)
    password_hash = Column(String(), nullable = False)
    created_at = Column(DateTime, server_default=func.now())


    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password)


    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<User {self.login}>'