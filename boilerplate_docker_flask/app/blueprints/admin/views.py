from flask import Blueprint, render_template

admin = Blueprint('admin', __name__, template_folder='templates')

@admin.route('/admin')
def home():
    return render_template('admin.html')

@admin.route('/users')
def terms():
    return render_template('users.html') 
