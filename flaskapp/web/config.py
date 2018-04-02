import os
import logging

# see http://flask.pocoo.org/docs./0.12/api

_basedir = os.path.abspath(os.path.dirname(__file__))

class AppConfig(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or ';lakjds;flkjasd;lfkjasdf'
    LOG_FILE = _basedir+'/log/flaskapp.log'
    LOG_LEVEL = logging.ERROR  # CRITICAL,ERROR,WARNING,INFO,DEBUG,NOTSET
    MYSQL_USER = 'python'
    MYSQL_PASSWORD = 'python-pass'
    MYSQL_DB = 'flaskapp'
    #MYSQL_HOST = '192.168.1.176'  # public ip
    MYSQL_HOST = 'db'             # container network
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://'+MYSQL_USER+':'+MYSQL_PASSWORD+'@'+MYSQL_HOST+'/'+MYSQL_DB
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_POOL_TIMEOUT = 30
    SQLALCHEMY_POOL_RECYCLE = 30
    SQLALCHEMY_MAX_OVERFLOW = 2

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(AppConfig):
    DEBUG = True
    LOG_LEVEL = logging.DEBUG
    SQLALCHEMY_RECORD_QUERIES = True

class TestingConfig(AppConfig):
    TESTING = True
    LOG_LEVEL = logging.INFO
    #SQLALCHEMY_ECHO = True
    WTF_CSRF_ENABLED = False

class ProductionConfig(AppConfig):
    DEBUG = False
    TESTING = False
    LOG_LEVEL = logging.WARNING
    BOOTSTRAP_USE_MINIFIED = True
    BOOTSTRAP_SERVE_LOCAL = True

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