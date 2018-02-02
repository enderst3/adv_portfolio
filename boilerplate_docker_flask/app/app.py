from flask import Flask, render_template
from celery import Celery
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

from app.blueprints.page import page
from app.blueprints.contact import contact
from app.blueprints.items import items
from app.blueprints.items.models import Item
from app.extensions import debug_toolbar, mail, csrf, db



CELERY_TASK_LIST = [
    'app.blueprints.contact.tasks',
]


def create_celery_app(app=None):
    """
    Create a new Celery object and tie together the Celery config to the app's
    config. Wrap all tasks in the context of the application.

    :param app: Flask app
    :return: Celery app
    """
    app = app or create_app()

    celery = Celery(app.import_name, broker=app.config['CELERY_BROKER_URL'],
                    include=CELERY_TASK_LIST)
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
    return celery


def create_app():
    """
    Create Flask app using the factory pattern

    :return Flask app
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object("config.settings")
    app.config.from_pyfile('settings.py', silent=True)

    app.logger.setLevel(app.config['LOG_LEVEL'])
    

    # database
    db.init_app(app)

    # admin
    admin = Admin(app, name='dashboard')
    admin.add_view(ModelView(Item, db.session))

    # templates
    error_templates(app)

    # blueprints
    app.register_blueprint(page)
    app.register_blueprint(contact)
    app.register_blueprint(items)
    extensions(app)


    return app

def extensions(app):
    """
    Register 0 or more extentions (mutats the app passed in).

    :para app: flask app instance
    :return: None
    """
    debug_toolbar.init_app(app)
    mail.init_app(app)
    csrf.init_app(app)
    db.init_app(app)

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