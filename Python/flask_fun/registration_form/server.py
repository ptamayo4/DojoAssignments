from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
app.secret_key = "AllYourBaseAreBelongToUs"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'[a-zA-Z]+\d+')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    error = False
    if len(request.form['email']) < 1:
        flash("You must enter an email address","fail")
        error = True
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Email is not in correct format: email@website.com","fail")
        error = True
    else:
        print "email pass"

    if len(request.form['first_name']) < 1:
        flash("You must enter a first name","fail")
        error = True
    elif not request.form['first_name'].isalpha():
        flash("First name cannot contain numbers","fail")
        error = True
    else:
        print "first name pass"

    if len(request.form['last_name']) < 1:
        flash("You must enter a last name","fail")
        error = True
    elif not request.form['last_name'].isalpha():
        flash("Last name cannot contain numbers","fail")
        error = True
    else:
        print "last name pass"

    if len(request.form['password']) < 8:
        flash("Password must be at least 8 characters", "fail")
        error = True
    if not PASSWORD_REGEX.match(request.form['password']):
        flash("Password needs at least one capital letter and 1 number", "fail")
        error = True

    if len(request.form['password_confirm']) < 8:
        flash("You must confirm password","fail")
        error = True
    elif request.form['password_confirm'] != request.form['password']:
        flash("Password confirmation does not match", "fail")
        error = True

    if error == False:
        flash("Thanks for submitting your information", "pass")
    return redirect('/')

app.run(debug=True)
