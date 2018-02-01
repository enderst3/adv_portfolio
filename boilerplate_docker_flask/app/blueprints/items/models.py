from flask import Flask
from app.extensions import db


class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Item %r>' % self.name

    
