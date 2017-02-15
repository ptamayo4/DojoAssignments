from flask import Flask, render_template, redirect, flash, request, session
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)
app.secret_key="ShhItsSecret"
mysql = MySQLConnector(app,'emailsdb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# TODO: Implement saving of email in database and flashing with color on '/'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    if EMAIL_REGEX.match(request.form['email']):
        mysql.query_db("INSERT INTO emails (email, created_at, updated_at) VALUES ('{}', NOW(), NOW())".format(request.form['email']))
        valid = request.form['email']
        emails = mysql.query_db("SELECT * FROM emails")
        return render_template('success.html', emails = emails, valid = valid)
    else:
        flash("Email is not valid!", "red")
        return redirect('/')

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/delete/<email_id>', methods=['POST'])
def delete(email_id):
    mysql.query_db("DELETE FROM emails WHERE id = {}".format(email_id))
    emails = mysql.query_db("SELECT * FROM emails")
    return render_template('success.html', emails = emails)


app.run(debug=True)
