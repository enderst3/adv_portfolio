from flask import Flask
from main.controllers import main
from user.controllers import user, logout


app = Flask(__name__)


app.register_blueprint(main, url_prefix='/')
app.register_blueprint(user, url_prefix='/user')
app.register_blueprint(user, url_prefix='/logout')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
