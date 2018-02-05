from flask import Blueprint, render_template, current_app, jsonify
from app.extensions import db
from sqlalchemy import create_engine
from .models import Item

items = Blueprint('items', __name__, template_folder='templates')

@items.route('/items')
def item():
    eng = db.create_engine(current_app.config['SQLALCHEMY_DATABASE_URI'])
    con = eng.connect()
    stmt = db.text('''SELECT * FROM item''')
    rs = con.execute(stmt)

    items = rs.fetchall()
    # return "%s <br/> %s" % (stmt, items)
    return render_template('items/items.html', items = items)

# test the db to see if connecting
@items.route('/count')
def item_count():
    eng = db.create_engine(current_app.config['SQLALCHEMY_DATABASE_URI'])
    con = eng.connect()
    stmt = db.text('''SELECT COUNT(*) FROM item''')
    rs = con.execute(stmt)

    data = rs.fetchone()[0]
    return "%s <br/> %s" % (stmt, data)

@items.route('/get_item/<int:id>')
def get_item(id):
    item = Item.query.get_or_404(id)
    return str(item.name)
