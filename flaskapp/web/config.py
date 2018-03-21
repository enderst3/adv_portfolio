import os

# see http://flask.pocoo.org/docs./0.12/api

class AppConfig(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or ';lakjds;flkjasd;lfkjasdf'

    @staticmethod
    def init_app(app):
        pass