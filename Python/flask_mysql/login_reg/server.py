from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "MORDOR"
mysql = MySQLConnector(app, 'logindb') #wall
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/success', methods=['POST'])
def login():
    email_pass = False
    if EMAIL_REGEX.match(request.form['email']) and len(request.form['password']) >= 8:
        email = request.form['email']
        email_pass = True
        print email
        hashed_password = mysql.query_db("SELECT password FROM users WHERE email = '{}'".format(email))
        hashed_password = hashed_password[0]['password']
    else:
        flash('Invalid Login')
        return redirect('/')

    password = request.form['password']
    if bcrypt.check_password_hash(hashed_password, password) and email_pass == True:
        name = mysql.query_db("SELECT first_name FROM users WHERE email = '{}'".format(email))
        name = name [0]['first_name']
        session['name'] = name
        return redirect('/')



@app.route('/register', methods=['POST'])
def register():
    if EMAIL_REGEX.match(request.form['email']) and request.form['password'] >= 8 and request.form['password'] == request.form['confirm_password']:
        data = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "password":  bcrypt.generate_password_hash(request.form['password'])
        }
    query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
    print mysql.query_db(query, data)
    return redirect('/the_wall')
app.run(debug=True)
