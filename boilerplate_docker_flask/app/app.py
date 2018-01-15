from flask import Flask

from app.blueprints.page import page
from app.blueprints.admin import admin
from app.extensions import debug_toolbar


def create_app():
    """
    Create Flask app using the factory pattern

    :return Flask app
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object("config.settings")
    app.config.from_pyfile('settings.py', silent=True)

    app.logger.setLevel(app.config['LOG_LEVEL'])

    app.register_blueprint(page)
    app.register_blueprint(admin)
    extensions(app)

    return app

def extensions(app):
    """
    Register 0 or more extentions (mutats the app passed in).

    :para app: flask app instance
    :return: None
    """
    debug_toolbar.init_app(app)

    return None