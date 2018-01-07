from flask import Flask, render_template
from web.main.controllers import main
from web.user.controllers import user

app = Flask(__name__)

app.register_blueprint(main, url_prefix='/')
app.register_blueprint(user, url_prefix='/user')

