from flask import Blueprint, render_template


main = Blueprint('main', __name__, template_folder='templates')


@main.route('/')
def home_page():
    return render_template('home.html')


@main.route('/hello')
def hello_page():
    return render_template('hello.html')

