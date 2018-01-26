from flask import Blueprint, render_template
from app.extensions import db
from sqlalchemy import create_engine

items = Blueprint('items', __name__, template_folder='templates')

@items.route('/items')
def item():
    return render_template('items/items.html')

# items.route('/count')
# def item_count():
#     eng = db.create_engine(app.config.settings['SQALCHEMY_DATABASE_URI'])
#     con = eng.connect()
#     stmt = db.test('''SELECT COUNT(*) FROM item''')
#     rs = con.exectue(stmt)

#     data = rs.fetchone()[0]
#     return "%s <br/> %s" % (stmt, data)
