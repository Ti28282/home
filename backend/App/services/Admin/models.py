from app import db


class UsersModel(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    login = db.Column(db.String(20), nullable = False, unique = True)
    password = db.Column(db.String(25), nullable = False)


    def __repr__(self):
        return f'<User {self.login}>'