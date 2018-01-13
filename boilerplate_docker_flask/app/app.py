from flask import Flask

from app.blueprints.page import page
from app.blueprints.admin import admin


def create_app():
    """
    Create Flask app using the factory pattern

    :return Flask app
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object("config.settings")
    app.config.from_pyfile('settings.py', silent=True)

    app.register_blueprint(page)
    app.register_blueprint(admin)

    return app