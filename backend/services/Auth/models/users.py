
from sqlalchemy import Column, String, Integer, DateTime, func
from Auth.app import  app, bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt


bcrypt = Bcrypt(app)
db = SQLAlchemy(app)

# todo Migrate
migrate = Migrate(app, db)

class Users(db.Model):

    id = Column(Integer(), autoincrement = True, primary_key = True)
    login = Column(String(80), nullable = False, unique = True)
    password_hash = Column(String(), nullable = False)
    created_at = Column(DateTime, server_default = func.now())


    def set_password(self, password: str):
        self.password_hash = bcrypt.generate_password_hash(password)


    def check_password(self, password: str) -> bool:
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<User {self.login}>'
    
