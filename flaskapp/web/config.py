import os
import logging

# see http://flask.pocoo.org/docs./0.12/api

_basedir = os.path.abspath(os.path.dirname(__file__))

class AppConfig(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or ';lakjds;flkjasd;lfkjasdf'
    LOG_FILE = _basedir+'/log/flaskapp.log'
    LOG_LEVEL = logging.ERROR  # CRITICAL,ERROR,WARNING,INFO,DEBUG,NOTSET


    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(AppConfig):
    DEBUG = True
    LOG_LEVEL = logging.DEBUG

class TestingConfig(AppConfig):
    TESTING = True
    LOG_LEVEL = logging.INFO

class ProductionConfig(AppConfig):
    DEBUG = False
    TESTING = False
    LOG_LEVEL = logging.WARNING

    @classmethod
    def init_app(cls, app):
        # multi-stop setups could go here
        AppConfig.init_app(app)

config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}