from flask import Flask, request, render_template
from mysqlconnection import MySQLConnector
# imports the Bcrypt module
from flask.ext.bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'my_database_here')
# this will load a page that has 2 forms one for registration and login
@app.route('/', methods=['GET'])
def index():
 return render_template('index.html')
# we are going to add functions to create new users and login users
