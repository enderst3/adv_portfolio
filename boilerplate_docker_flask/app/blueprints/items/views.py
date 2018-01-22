from flask import Blueprint, render_template

items = Blueprint('items', __name__, template_folder='templates')

@items.route('/items')
def item():
    return render_template('items/items.html')
