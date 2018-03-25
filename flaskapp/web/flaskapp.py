import datetime
import os
import logging
from app import create_app

# call create_app() in app/__init__.py 
app = create_app(os.getenv('FLASK_CONFIG') or 'default')

@app.route('/')
def hello_flaskapp():
    logging.info("hello_flaskapp()")
    return 'Hello folks'

# run "docker ps" to get the flaskapp_web CONTAINER_ID
# run "docker attach CONTAINER_ID" to connect a terminal session
# pdb.set_trace() will launch the debugger in the attached terminal
# see https:docs.python.org/3.6/library/pdb.html?highlight+pdb#debugger-commands
@app.route('/debug')
def hello_debug():
    import pdb; pdb.set_trace()
    logging.info("hello_debug()")
    return "Hello Python Debugger"
