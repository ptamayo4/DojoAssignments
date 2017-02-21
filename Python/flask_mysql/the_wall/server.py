from flask import Flask, render_template, request, redirect, session, flash
import re
from datetime import datetime, timedelta
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
pass_regex = re.compile(r'^[A-Z]+.*[0-9]+$')
app = Flask(__name__)
app.secret_key = "secret"
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'wall')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/wall')
def wall():
    current_time = datetime.now()
    ok_delta = timedelta(minutes=30)
    users_messages = mysql.query_db("select users.id as user_id, messages.id, first_name, last_name, message, messages.created_at from users join messages on messages.user_id = users.id order by messages.created_at desc")
    comments = mysql.query_db("select message_id, user_id, comment, comments.created_at, first_name, last_name from comments join users on user_id = users.id order by comments.created_at asc")
    return render_template('wall.html', users_messages=users_messages, comments=comments, current_time = current_time, ok_delta = ok_delta)
@app.route('/message', methods=['post'])
def message():
    query = ("insert into messages (user_id, message, created_at, updated_at) values (:user_id, :message, NOW(), NOW())")
    data = {'user_id': session['id']['id'], 'message':request.form['message']}
    mysql.query_db(query, data)
    return redirect('/wall')
@app.route('/comment', methods=['post'])
def comment():
    query = ("insert into comments (user_id, message_id, comment, created_at, updated_at) values (:user_id, :message_id, :comment, NOW(), NOW())")
    data = {'user_id': session['id']['id'], 'message_id': request.form['message_id'], 'comment':request.form['comment']}
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/register', methods=['POST'])
def register():
    if email_regex.match(request.form['email']) and request.form['password'] >= 8 and request.form['password'] == request.form['confirm_password']:
        data = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "password":  bcrypt.generate_password_hash(request.form['password'])
        }
    query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
    print mysql.query_db(query, data)
    get_id = mysql.query_db('select id, first_name, last_name from users where email=:email and password=:password', data)
    session['id'] = get_id[0]
    print session['id']
    return redirect('/wall')

@app.route('/success', methods=['POST'])
def login():
    email_pass = False
    if email_regex.match(request.form['email']) and len(request.form['password']) >= 8:
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
        data = { 'password': hashed_password, 'email': request.form['email']}
        get_id = mysql.query_db('select id, first_name, last_name from users where email=:email and password=:password', data)
        session['id'] = get_id[0]
        return redirect('/wall')

@app.route('/log_off', methods=['post'])
def log_off():
    session.pop('id', None)
    return redirect('/')

@app.route('/delete', methods=['post'])
def delete():
    query = 'delete from comments where message_id=:message_id'
    data = {'message_id': request.form['message_id']}
    print data['message_id']
    mysql.query_db(query, data)
    query = 'delete from messages where id=:message_id'
    mysql.query_db(query, data)
    return redirect('/wall')

app.run(debug=True)
