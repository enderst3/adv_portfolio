from flask import Blueprint, render_template



user = Blueprint('user', __name__, template_folder='templates')


@user.route('/')
def user_home():
    return render_template('user.html')


@user.route('/')
def logout():
    return render_template('logout.html')
