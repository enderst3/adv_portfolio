from flask import Blueprint, render_template

admin = Blueprint('admin', __name__, template_folder='templates')

@admin.route('/admin')
def index():
    return render_template('admin/admin.html')

@admin.route('/users')
def users():
    return render_template('admin/users.html') 
