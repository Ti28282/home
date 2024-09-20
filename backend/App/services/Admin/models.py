from .config import DataBase

db = DataBase.db






class Users(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    login_ = db.Column(db.String(20), nullable = False, unique = True)
    password_ = db.Column(db.String(25), nullable = False)


    def __repr__(self):
        return f'<User {self.login}>'