from flask import Blueprint, render_template, current_app
from app.extensions import db
from sqlalchemy import create_engine

items = Blueprint('items', __name__, template_folder='templates')

@items.route('/items')
def item():
    return render_template('items/items.html')


# test the db to see if connecting
@items.route('/count')
def item_count():
    eng = db.create_engine(current_app.config['SQLALCHEMY_DATABASE_URI'])
    con = eng.connect()
    stmt = db.text('''SELECT COUNT(*) FROM item''')
    rs = con.execute(stmt)

    data = rs.fetchone()[0]
    return "%s <br/> %s" % (stmt, data)
