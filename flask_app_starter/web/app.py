import os
from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient(
    os.environ['DB_PORT_27017_TCP_ADDR'],
    27017)

# name db what you like
db = client.my_appdb


@app.route('/')
def hello_world():
    return 'Hello World!!'


@app.route('/user')
def user():
    return 'User Page'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)