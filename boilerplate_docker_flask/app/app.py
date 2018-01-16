from flask import Flask, render_template

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

    error_templates(app)
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

def error_templates(app):
    """
    Register 0 or more custom error pages (mutates the app passed in).

    :param app: Flask application instance
    :return: None
    """

    def render_status(status):
        """
         Render a custom template for a specific status.
           Source: http://stackoverflow.com/a/30108946

         :param status: Status as a written name
         :type status: str
         :return: None
         """
        # Get the status code from the status, default to a 500 so that we
        # catch all types of errors and treat them as a 500.
        code = getattr(status, 'code', 500)
        return render_template('errors/{0}.html'.format(code)), code

    for error in [404, 500]:
        app.errorhandler(error)(render_status)

    return None